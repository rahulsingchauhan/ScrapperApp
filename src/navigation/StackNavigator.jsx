import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash/SplashScreen';
import DrawerNavigator from './DrawerNavigator';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import ReadyToStart from '../screens/ReadyToStart/ReadyToStart';
import SignUpScreen from '../auth/SignUp/SignUpScreen';
import LoginScreen from '../auth/Login/LoginScreen';
import ChooseYourRole from '../screens/ChooseRoles/ChooseYourRole';
import screenNames from '../utils/screenName';



const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screenNames.ONBOARDING.SPLASH} component={SplashScreen} />
      <Stack.Screen name={screenNames.APP.MAIN_DRAWER} component={DrawerNavigator} />
      <Stack.Screen name={screenNames.ONBOARDING.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={screenNames.ONBOARDING.CHOOSE_ROLE} component={ChooseYourRole} />
      <Stack.Screen name={screenNames.ONBOARDING.READY_TO_START} component={ReadyToStart} />
      <Stack.Screen name={screenNames.AUTH.SIGNUP} component={SignUpScreen} />
      <Stack.Screen name={screenNames.AUTH.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;