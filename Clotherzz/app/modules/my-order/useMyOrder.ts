import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../constants';

const useMyOrder = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const navigateToOrderDetails = () => {
    navigation.navigate(Routes.OrderDetails);
  };
  return {
    navigateToOrderDetails
  };
};

export default useMyOrder;
