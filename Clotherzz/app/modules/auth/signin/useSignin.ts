import { useState } from 'react';
import { Images } from '../../../assets';

interface ItemType {
  [key: string]: string;
}

export type DataType = ItemType[];

const useSignin = () => {
  const [number, setNumber] = useState<string>('');
  const data = [
    {
      image: Images.poster1,
      id: '1',
    },
    {
      image: Images.poster2,
      id: '3',
    },
  ];
  const handleChange = (input: string) => {
    const sanitizedText = input.replace(/[^0-9]/g, '');
    setNumber(sanitizedText);
  };
  return {
    handleChange,
    number,
    data,
  };
};

export default useSignin;
