import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackParamList} from '../types';
import * as SCREENS from '../constants/screens';
import Card from '../components/Card';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import Home from '../screens/Home';
import BottomNavigation from '../navigations/BottomNavigation';
import WaitingScreen from '../screens/WaitingScreen';
import Upload from '../screens/Upload';
import ViewProfile from '../screens/ViewProfile';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import { navigationRef } from '../navigations/RootNavigation';

const stack = createStackNavigator<RootStackParamList>();

const screenOptions ={
  headerShown: false,
};

export default function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <stack.Navigator screenOptions={screenOptions} initialRouteName={SCREENS.WAITING_SCREEN}>
        <stack.Screen name={SCREENS.LOGIN} component={Login} />
        <stack.Screen name={SCREENS.REGISTER} component={Register} />
        <stack.Screen name={SCREENS.HOME} component={Home} />
        <stack.Screen name={SCREENS.BOTTOM_NAVIGATION} component={BottomNavigation} />
        <stack.Screen name={SCREENS.WAITING_SCREEN} component={WaitingScreen} />
        <stack.Screen name={SCREENS.UPLOAD} component={Upload} />
        <stack.Screen name={SCREENS.VIEW_PROFILE} component={ViewProfile} />
        <stack.Screen name={SCREENS.FORGET_PASSWORD} component={ForgetPassword} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
