import { useState } from 'react';

const usePaymentScreen = () => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [upiMethod, setUpiMethod] = useState<string>('');

  const handleUpiSelection = (input: string) => {
    setUpiMethod(input);
    setIsSelected(true);
  };

  return {
    upiMethod,
    isSelected,
    handleUpiSelection,
  };
};

export default usePaymentScreen;
