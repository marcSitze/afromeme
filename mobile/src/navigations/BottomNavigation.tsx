import React, { useState } from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Feather';

import Home from '../screens/Home';
import Login from '../screens/Auth/Login';
import * as SCREENS from '../constants/screens';
import colors from '../constants/colors';
import Profile from '../screens/Profile';
import Upload from '../screens/Upload';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  const screenOptions = {
    headerShown: false,
    labeled: false
  };
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, focused }) => <Icon name="home" size={30} color={!focused ? colors.light.black: color} />,
          tabBarLabel: 'Home',
        }}
        name={SCREENS.HOME}
        component={Home}
      />
      <Tab.Screen options={{
          tabBarIcon: ({ color, focused }) => <Icon name="plus-square-o" size={30} color={!focused ? colors.light.black: color} />,
          tabBarLabel: 'Create',
        }} name={SCREENS.UPLOAD} component={Upload} />
      <Tab.Screen options={{
        tabBarIcon: ({ color, focused }) => isAuth ? <Icon name="user" size={30} color={!focused ? colors.light.black: color} />: <Icon name="user-secret" size={30} color={!focused ? "#000": color} />,
        tabBarLabel: 'Profile',
      }} name={SCREENS.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}
export default BottomNavigation;
