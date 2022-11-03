import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Feather';

import Home from '../screens/Home';
import * as SCREENS from '../constants/screens';
import colors from '../constants/colors';
import Profile from '../screens/Profile';
import Upload from '../screens/Upload';
import Notifications from '../screens/Notifications';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  const screenOptions = {
    headerShown: false,
    labeled: false,
    tabBarShowLabel: false,
  };
  const [isAuth, setIsAuth] = useState(false);
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name="home"
              size={18}
              color={!focused ? colors.light.black : color}
            />
          ),
          tabBarLabel: 'Home',
          tabBarShowLabel: false,
        }}
        name={SCREENS.HOME}
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name="search"
              size={18}
              color={!focused ? colors.light.black : color}
            />
          ),
          tabBarLabel: 'Search',
        }}
        name={SCREENS.SEARCH}
        component={Search}
      />
       <Tab.Screen
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name="plus-square-o"
              size={30}
              color={!focused ? colors.light.black : color}
            />
          ),
          tabBarLabel: 'Create',
        }}
        name={SCREENS.UPLOAD}
        component={Upload}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused}) => (
            <Icon
              name="bell"
              size={18}
              color={!focused ? colors.light.black : color}
            />
          ),
          tabBarLabel: 'Notifications',
        }}
        name={SCREENS.NOTIFICATION}
        component={Notifications}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, focused}) =>
              <Icon
                name="user"
                size={18}
                color={!focused ? colors.light.black : color}
              />
            ,
          tabBarLabel: 'Profile',
        }}
        name={SCREENS.PROFILE}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
export default BottomNavigation;
