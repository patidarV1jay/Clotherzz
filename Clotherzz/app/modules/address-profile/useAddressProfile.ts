import { useState } from 'react';

const useAddressProfile = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleModalVisibility = () => {
    setIsVisible(!isVisible);
  };

  return {
    isVisible,
    handleModalVisibility,
  };
};

export default useAddressProfile;
