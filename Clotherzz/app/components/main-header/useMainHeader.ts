import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../constants';

const useMainHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const navigateToSearchScreen = () => {
    navigation.navigate(Routes.SearchScreen);
  };

  const navigateToCart = () => {
    navigation.navigate(Routes.CartScreen);
  };

  return {
    navigateToSearchScreen,
    navigateToCart
  };
};

export default useMainHeader;
