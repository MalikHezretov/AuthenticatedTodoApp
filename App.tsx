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
    // App entry point
    // Wrap NavigationStack with Provider so the app state available through the nav stack
    <Provider store={store}>
      {/** Nav stack that contains auth and app screens */}
      <NavigationStack />
    </Provider>
  );
}

export default App;
