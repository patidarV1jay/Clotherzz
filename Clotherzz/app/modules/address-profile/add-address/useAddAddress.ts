import axios from 'axios';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';
import { AddressSchema } from '../../../constants';
import { FormikValuesTypes } from '../../../types';

const useAddAddress = () => {
  const [pincodeArea, setPinCodeArea] = useState<ApiResponse>({});
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik<FormikValuesTypes>({
    initialValues: {
      name: '',
      address: '',
      mobile: '',
      pincode: '',
      locality: '',
      city: '',
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
      setLoading(true);
      const response = await axios.get(
        'https://api.postalpincode.in/pincode/' + formik.values.pincode,
      );
      setPinCodeArea(response?.data[0]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
    loading,
  };
};

export default useAddAddress;
