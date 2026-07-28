import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../screens/Splash';
import Welcome from '../screens/Welcome';
import NextDays from '../screens/NextDays';
import { TabRoutes } from './tab.routes';

const Stack = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Main" component={TabRoutes} />
      <Stack.Screen name="NextDays" component={NextDays} />
    </Stack.Navigator>
  );
};
