import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types';
import * as SCREENS from '../constants/screens';
import Card from '../components/Card';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import Home from '../screens/Home';

const stack = createStackNavigator<RootStackParamList>();

const screenOptions ={
  headerShown: false,
};

export default function Routes() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={screenOptions} initialRouteName={SCREENS.HOME}>
        <stack.Screen name={SCREENS.LOGIN} component={Login} />
        <stack.Screen name={SCREENS.REGISTER} component={Register} />
        <stack.Screen name={SCREENS.HOME} component={Home} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
