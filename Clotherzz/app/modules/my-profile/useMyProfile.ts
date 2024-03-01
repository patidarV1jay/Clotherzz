import { useRef, useState } from 'react';
import { Animated } from 'react-native';
import { ProfileSchema } from '../../constants';
import { useFormik } from 'formik';

const useMyProfile = () => {
  const [dropdownVisible, setDropDownVisible] = useState<boolean>(false);
  const [selectGender, setSelectGender] = useState<string>('');

  const formik = useFormik({
    validationSchema: ProfileSchema,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
    },
    onSubmit: () => {},
  });

  const toggleDropDown = () => {
    setDropDownVisible(!dropdownVisible);
  };
  const selectedGender = (gender: string) => {
    setSelectGender(gender);
    toggleDropDown()
  };

  return {
    formik,
    toggleDropDown,
    selectGender,
    dropdownVisible,
    selectedGender,
  };
};

export default useMyProfile;
