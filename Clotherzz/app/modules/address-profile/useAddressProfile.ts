import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';

interface RouteType {
  params: {
    params: boolean;
  };
}

const useAddressProfile = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<string>('default');
  const route = useRoute();
  const { params } = route?.params as RouteType;
  const handleSelected = (input: string) => {
    setIsSelected(input);
  };
  const handleModalVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    // setIsVisible(true);
  }, []);

  return {
    isVisible,
    handleModalVisibility,
    handleSelected,
    isSelected,
    params,
  };
};

export default useAddressProfile;
