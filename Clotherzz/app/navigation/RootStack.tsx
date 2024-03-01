import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../constants';
import AuthStack from './AuthStack';
import TabNavigation from './TabNavigation';
import {
  AddressProfile,
  AddressScreen,
  CartScreen,
  Payment,
  SearchScreen,
  MyProfile,
} from '../modules';
import { MainHeader, SecondaryHeader } from '../components';
const MainStack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={Routes.AuthStack}
        component={AuthStack}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name={Routes.TabNavigation}
        component={TabNavigation}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name={Routes.SearchScreen} component={SearchScreen} />
      <MainStack.Screen
        name={Routes.CartScreen}
        component={CartScreen}
        options={{
          header: () => <SecondaryHeader title="Cart" wishlist={true} />,
        }}
      />
      <MainStack.Screen
        name={Routes.AddressScreen}
        component={AddressScreen}
        options={{
          header: () => <SecondaryHeader title="Address" wishlist={false} />,
        }}
      />
      <MainStack.Screen
        name={Routes.AddressProfile}
        component={AddressProfile}
        options={{
          header: () => <SecondaryHeader title="Address" wishlist={false} />,
        }}
      />
      <MainStack.Screen
        name={Routes.Payment}
        component={Payment}
        options={{
          header: () => <SecondaryHeader title="Payment" wishlist={false} />,
        }}
      />
      <MainStack.Screen
        name={Routes.MyProfile}
        component={MyProfile}
        options={{
          header: () => <SecondaryHeader title="My Profile" wishlist={true} />,
        }}
      />
    </MainStack.Navigator>
  );
};

export default RootStack;
