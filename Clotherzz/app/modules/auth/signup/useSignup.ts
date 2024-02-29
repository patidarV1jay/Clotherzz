import { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes, ToastStrings } from '../../../constants';

const useSignup = () => {
  const [number, setNumber] = useState<string>('');
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const handleNumber = (input: string) => {
    const sanitizedText = input.replace(/[^0-9]/g, '');
    setNumber(sanitizedText);
  };

  const handleSubmit = () => {
    const isValid = /^[6-9]\d{9}$/.test(number);

    if (isValid) {
      return navigation.navigate(Routes.VerifyOtp, { params: number });
    }
    return ToastAndroid.show(ToastStrings.validNumber, ToastAndroid.SHORT);
  };
  return {
    number,
    handleNumber,
    handleSubmit,
  };
};

export default useSignup;
