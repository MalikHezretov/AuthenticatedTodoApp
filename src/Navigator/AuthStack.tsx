import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';
import {RouteNameEnum} from './screenTypes';

const Stack = createNativeStackNavigator();

// navigation stack of screens before user logs in
const NavigationStack = () => {
  return (
    <Stack.Navigator initialRouteName={RouteNameEnum.Auth}>
      <Stack.Screen name={RouteNameEnum.Auth} component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default NavigationStack;
