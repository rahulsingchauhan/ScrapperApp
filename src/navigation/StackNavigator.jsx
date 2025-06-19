// src/navigation/StackNavigator.jsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash/SplashScreen'; // 👈 Import splash screen
import DrawerNavigator from './DrawerNavigator'; // 👈 Import drawer nav
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* 👇 Splash screen shown first */}
      <Stack.Screen name="Splash" component={SplashScreen} />

      {/* 👇 MainDrawer includes Home and other drawer items */}
      <Stack.Screen name="MainDrawer" component={DrawerNavigator} screenOptions />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
