import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AppStackRoutes } from './app.stack.routes';

import { Home } from '../screens/Home';
import { MyCars } from '../screens/MyCars';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <Navigator headerMode='none' initialRouteName='SignIn'>
      <Screen name='Home' component={AppStackRoutes} />
      <Screen name='MyCars' component={MyCars} />
      <Screen name='Profile' component={Home} />
    </Navigator>
  );
}
