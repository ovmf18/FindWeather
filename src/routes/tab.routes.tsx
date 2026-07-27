import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Home from '../screens/Home';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.white,
        tabBarInactiveTintColor: theme.colors.gray[400],
        tabBarStyle: {
          backgroundColor: theme.colors.dark[500],
          borderTopColor: theme.colors.dark[400],
          paddingBottom: insets.bottom > 0 ? insets.bottom : 24,
          paddingTop: 10,
          height: insets.bottom > 0 ? 60 + insets.bottom : 80,
        },
        tabBarLabelStyle: {
          fontFamily: theme.fonts.family.bold,
          fontSize: 14,
          marginTop: 4,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={Search}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
