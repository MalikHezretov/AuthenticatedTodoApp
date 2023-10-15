import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {useSelector} from 'react-redux';
import {StoreState} from '../redux/store';

const NavigationStack = () => {
  const authReducer = useSelector((state: StoreState) => state.authReducer);
  const isAuthenticated = authReducer.isAuthenticated;

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default NavigationStack;
