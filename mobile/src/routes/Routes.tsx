import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as SCREENS from '../constants/screens';
import Card from '../components/Card';
import {RootStackParamList} from '../types';

const RootStack = createStackNavigator<RootStackParamList>();
export default function Routes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={SCREENS.HOME}>
        <RootStack.Screen name={SCREENS.HOME} component={Card} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
