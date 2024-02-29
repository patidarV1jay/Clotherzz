import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../constants';
import AuthStack from './AuthStack';
import TabNavigation from './TabNavigation';
import {
  AddressProfile,
  AddressScreen,
  CartScreen,
  SearchScreen,
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
          header: () => <SecondaryHeader title="Cart" />,
        }}
      />
      <MainStack.Screen
        name={Routes.AddressScreen}
        component={AddressScreen}
        options={{
          header: () => <SecondaryHeader title="Address" />,
        }}
      />
      <MainStack.Screen
        name={Routes.AddressProfile}
        component={AddressProfile}
        options={{
          header: () => <SecondaryHeader title="Address" />,
        }}
      />
    </MainStack.Navigator>
  );
};

export default RootStack;
