import { ParamListBase, useRoute } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import {
  TextInput,
  TextInputKeyPressEventData,
  ToastAndroid,
} from 'react-native';
import { Routes, ToastStrings } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type OtpState = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
};

interface routeType {
  params: string;
}

const useVerifyOtp = () => {
  const [count, setCount] = useState<number>(30);
  const inputs = Array(6).fill('');
  const inputRef = useRef<TextInput>(null);
  const [newOtp, setNewOtp] = useState<OtpState>({
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  });
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const LastIndex = inputs.length - 1;
  const [nextInput, setNextInput] = useState(0);
  const route = useRoute();
  const { params } = route?.params as routeType;
  let CurrentInput = 0;

  const handleChange = (text: string, index: number) => {
    const otp = { ...newOtp };
    otp[index as keyof OtpState] = text;
    setNewOtp(otp);

    if (!text) {
      CurrentInput = nextInput === 0 ? 0 : index - 1;
    } else {
      CurrentInput = nextInput === LastIndex ? LastIndex : index + 1;
    }
    setNextInput(CurrentInput);
  };

  const handlePress = (event: TextInputKeyPressEventData, index: number) => {
    if (event.key === 'Backspace') {
      CurrentInput = nextInput === 0 ? 0 : index - 1;
      setNextInput(CurrentInput);
    }
  };

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [nextInput]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count === 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const handleSubmit = () => {
    for (let i = 0; i < 6; i++) {
      if (Object.values(newOtp)[i] === '') {
        return ToastAndroid.show(ToastStrings.enterOtp, ToastAndroid.SHORT);
      }
    }
    const enteredOtp = Object.values(newOtp).join('');
    navigation.navigate(Routes.TabNavigation);
  };

  const resendOtp = () => {
    ToastAndroid.show(ToastStrings.otpSent, ToastAndroid.SHORT);
    setCount(30);
  };

  return {
    inputs,
    newOtp,
    handleChange,
    inputRef,
    nextInput,
    count,
    handleSubmit,
    handlePress,
    resendOtp,
    params,
  };
};

export default useVerifyOtp;
