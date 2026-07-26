import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Search from '../screens/Search';
import { storage, WELCOME_KEY } from '../utils/storage';

const Stack = createNativeStackNavigator();

export const AppRoutes = () => {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  useEffect(() => {
    const checkWelcome = async () => {
      const hasSeenWelcome = await storage.getItem(WELCOME_KEY);
      if (hasSeenWelcome === 'true') {
        setInitialRoute('Home');
      } else {
        setInitialRoute('Welcome');
      }
    };
    checkWelcome();
  }, []);

  if (!initialRoute) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0B0B0E' }}>
        <ActivityIndicator size="large" color="#FFFFFF" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRoute as any}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};
