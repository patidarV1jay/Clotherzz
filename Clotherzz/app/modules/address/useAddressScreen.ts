import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../constants';

const useAddressScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const navigateToAddress = () => {
    navigation.navigate(Routes.AddressProfile);
  };

  const navigateToPayment = () => {
    navigation.navigate(Routes.Payment);
  };

  return {
    navigateToAddress,
    navigateToPayment
  };
};

export default useAddressScreen;
