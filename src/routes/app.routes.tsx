import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
