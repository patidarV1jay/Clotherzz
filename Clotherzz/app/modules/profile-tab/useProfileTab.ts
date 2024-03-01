import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../constants';

const useProfileTab = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const navigateToAddress = () => {
    navigation.navigate(Routes.AddressProfile);
  };

  const navigateToCart = () => {
    navigation.navigate(Routes.CartScreen);
  };

  const navigateToMyProfile = () => {
    navigation.navigate(Routes.MyProfile);
  };

  return {
    navigateToAddress,
    navigateToCart,
    navigateToMyProfile
  };
};

export default useProfileTab;
