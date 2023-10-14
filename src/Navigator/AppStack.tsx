import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddTodoScreen from '../screens/AddTodoScreen';
import {RouteNameEnum} from '.';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={RouteNameEnum.Home}>
      <Stack.Screen name={RouteNameEnum.Home} component={HomeScreen} />
      <Stack.Screen name={RouteNameEnum.AddTodo} component={AddTodoScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
