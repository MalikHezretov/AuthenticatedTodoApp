import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddTodoScreen from '../screens/AddTodoScreen';

const Stack = createNativeStackNavigator();

export enum RouteNameEnum {
  Home = 'HomeScreen',
  AddTodo = 'AddTodoScreen',
}

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RouteNameEnum.Home}>
        <Stack.Screen name={RouteNameEnum.Home} component={HomeScreen} />
        <Stack.Screen name={RouteNameEnum.AddTodo} component={AddTodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
