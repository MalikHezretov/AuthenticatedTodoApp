/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import NavigationStack from './src/Navigator';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationStack />
    </Provider>
  );
}

export default App;
