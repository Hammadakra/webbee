import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ParentNavigator from './src/Navigation/ParentNavigator';
import {Provider} from 'react-redux';
import {store, persistor} from './src/Store';
import {PersistGate} from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <ParentNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
