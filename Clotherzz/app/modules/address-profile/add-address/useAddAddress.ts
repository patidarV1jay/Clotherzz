import { useFormik } from 'formik';
import { AddressSchema } from '../../../constants';
import { FormikValuesTypes } from '../../../types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';

const useAddAddress = () => {
  const [pincodeArea, setPinCodeArea] = useState<ApiResponse>({});

  const formik = useFormik<FormikValuesTypes>({
    initialValues: {
      name: '',
      address: '',
      mobile: '',
      pincode: '',
      locality: '',
    },
    validationSchema: AddressSchema,
    onSubmit: () => {
      if (pincodeArea?.Status == 'Error') {
        return ToastAndroid.show('Pincode is invalid', ToastAndroid.SHORT);
      }
      console.log('submit');
    },
  });

  const fetchFunc = async () => {
    try {
      const response = await axios.get(
        'https://api.postalpincode.in/pincode/' + formik.values.pincode,
      );
      setPinCodeArea(response?.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (formik.values.pincode.length === 6) {
      fetchFunc();
    } else {
      setPinCodeArea({});
    }
  }, [formik.values.pincode]);

  return {
    formik,
    pincodeArea,
  };
};

export default useAddAddress;
