import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './navigation';
import { Provider } from 'react-redux';
import { store, persistor } from './redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ActivityIndicator } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
          <RootStack />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
