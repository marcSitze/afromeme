import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as SCREENS from '../constants/screens';
import Card from '../components/Card';
import { RootStackParamList } from '../types';

const Hello = () => {
  return <Text>hellow </Text>
}
const RootStack = createStackNavigator<RootStackParamList>();
export default function Routes() {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName={SCREENS.HOME}>
                <RootStack.Screen name={SCREENS.HOME} component={Card} />
                <RootStack.Screen name="Hello" component={Hello} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}