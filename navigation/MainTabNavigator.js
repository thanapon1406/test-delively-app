import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/home1.js';
import Home2Screen from '../screens/home/home2.js'
import { useDispatch } from 'react-redux';

import AuthScreen from '../screens/user/AuthScreen';

const HomeStackNavigator = createDrawerNavigator();

export const HomeNavigator = () => {
  const dispatch = useDispatch();

  return (
    <HomeStackNavigator.Navigator
      openByDefault
      drawerType={'permanent'}
      drawerStyle={{
        backgroundColor: '#32975b',
        width: 120
      }}
      overlayColor="transparent"
    >
      <HomeStackNavigator.Screen name="Home1" component={HomeScreen} />
      <HomeStackNavigator.Screen name="Home2" component={Home2Screen} />
    </HomeStackNavigator.Navigator>
  )
}

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen
        name="Auth"
        component={AuthScreen}
      />
    </AuthStackNavigator.Navigator>
  );
};