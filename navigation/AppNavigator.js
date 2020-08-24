import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeNavigator, AuthNavigator } from './MainTabNavigator';

const AppNavigator = props => {
  const isAuth = useSelector(state => !!state.auth.token);
  const didTryAutoLogin = useSelector(state => state.auth.didTryAutoLogin);
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuth && <Stack.Screen name={'Home'} component={HomeNavigator} />}
        {!isAuth && <Stack.Screen name={'Login'} component={AuthNavigator} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
