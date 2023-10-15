import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import AddTodoScreen from '../screens/AddTodoScreen';
import {RouteNameEnum} from './screenTypes';

const Stack = createNativeStackNavigator();

// App stack navigation stack of screens available to the user once they authenticate
const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={RouteNameEnum.Home}>
      <Stack.Screen name={RouteNameEnum.Home} component={HomeScreen} />
      <Stack.Screen name={RouteNameEnum.AddTodo} component={AddTodoScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
