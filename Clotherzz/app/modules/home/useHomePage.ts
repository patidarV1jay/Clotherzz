import { useState } from 'react';
import { Images } from '../../assets';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../constants';

interface ItemType {
  [key: string]: string;
}

export type DataType = ItemType[];

const useHomePage = () => {
  const [number, setNumber] = useState<string>('');
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const data = [
    {
      image: Images.poster1,
      id: '1',
    },
    {
      image: Images.poster2,
      id: '3',
    },
    {
      image: Images.poster1,
      id: '2',
    },
  ];

  const handleChange = (input: string) => {
    const sanitizedText = input.replace(/[^0-9]/g, '');
    setNumber(sanitizedText);
  };

  const navigateSearchScreen = () => {
    navigation.navigate(Routes.SearchScreen);
  };

  return {
    handleChange,
    number,
    data,
    navigateSearchScreen,
  };
};

export default useHomePage;
