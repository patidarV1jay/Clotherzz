import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../constants';
import { useState } from 'react';

const useCart = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [isVisible, setisVisible] = useState<boolean>(false);
  const [modalData, setModalData] = useState<string>('');
  const [size, setSize] = useState<string>('S');
  const [quantity, setQuantity] = useState<string>('5');

  const navigateToAddress = () => {
    navigation.navigate(Routes.AddressScreen);
  };

  const handleVisibility = (input: string) => {
    setModalData(input);
    setisVisible(!isVisible);
  };

  const handleSizeAndQuantity = (input: string) => {
    modalData === 'quantity' ? setQuantity(input) : setSize(input);
    handleVisibility('');
  };
  return {
    navigateToAddress,
    isVisible,
    handleVisibility,
    modalData,
    handleSizeAndQuantity,
    size,
    quantity,
  };
};

export default useCart;
