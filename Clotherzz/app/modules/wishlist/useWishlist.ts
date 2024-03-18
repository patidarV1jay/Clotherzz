import { useState } from 'react';

const useWishlist = () => {
  const [isVisible, setisVisible] = useState<boolean>(false);
  const [modalData, setModalData] = useState<string>('');
  const [size, setSize] = useState('');

  const handleVisibility = () => {
    setisVisible(!isVisible);
  };

  const handleSizeAndQuantity = (input: string) => {
    setSize(input);
  };

  return {
    isVisible,
    setisVisible,
    handleSizeAndQuantity,
    handleVisibility,
    modalData,
    size,
  };
};

export default useWishlist;
