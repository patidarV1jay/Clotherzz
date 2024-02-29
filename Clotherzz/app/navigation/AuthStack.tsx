import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Routes } from '../constants';
import { Signin, Signup, VerifyOtp } from '../modules';
import { MainHeader } from '../components';
const StackAuth = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <StackAuth.Navigator>
      <StackAuth.Screen
        name={Routes.Signup}
        component={Signup}
        options={{ headerShown: false }}
      />
      <StackAuth.Screen
        name={Routes.VerifyOtp}
        component={VerifyOtp}
        options={{ headerShown: false }}
      />
      <StackAuth.Screen
        name={Routes.Signin}
        component={Signin}
        options={{
          header: () => <MainHeader />,
        }}
      />
    </StackAuth.Navigator>
  );
};

export default AuthStack;
