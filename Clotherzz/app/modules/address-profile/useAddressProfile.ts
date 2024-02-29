import { useEffect, useState } from 'react';

const useAddressProfile = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleModalVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return {
    isVisible,
    handleModalVisibility,
  };
};

export default useAddressProfile;
