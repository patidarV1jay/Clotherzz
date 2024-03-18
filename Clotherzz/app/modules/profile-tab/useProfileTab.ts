import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../constants';

const useProfileTab = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const navigateToAddress = () => {
    navigation.navigate(Routes.AddressProfile, { params: false });
  };

  const navigateToCart = () => {
    navigation.navigate(Routes.CartScreen);
  };

  const navigateToMyProfile = () => {
    navigation.navigate(Routes.MyProfile);
  };

  const navigateToTnC = () => {
    navigation.navigate(Routes.TermsAndCondition);
  };

  const navigateToMyOrder = () => {
    navigation.navigate(Routes.MyOrder);
  };
  return {
    navigateToAddress,
    navigateToCart,
    navigateToMyProfile,
    navigateToTnC,
    navigateToMyOrder,
  };
};

export default useProfileTab;
