import { Text, View } from 'react-native';
import { Signin } from './modules/auth';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './navigation';

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
