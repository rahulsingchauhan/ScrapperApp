// routes.jsx

import DrawerNavigator from "./DrawerNavigator";
import SplashScreen from "../screens/Splash/SplashScreen";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import ChooseYourRole from "../screens/ChooseRoles/ChooseYourRole";
import ReadyToStart from "../screens/ReadyToStart/ReadyToStart";
import SignUpScreen from "../auth/SignUp/SignUpScreen";
import LoginScreen from "../auth/Login/LoginScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import screenNames from "../utils/screenName";

export const routes = {
  StackNavigator: [
     {
      name: screenNames.ONBOARDING.SPLASH,
      component: SplashScreen,
    },
  
    {
      name: screenNames.ONBOARDING.WELCOME,
      component: WelcomeScreen,
    },
    {
      name: screenNames.ONBOARDING.CHOOSE_ROLE,
      component: ChooseYourRole,
    },
    {
      name: screenNames.ONBOARDING.READY_TO_START,
      component: ReadyToStart,
    },
    {
      name: screenNames.AUTH.SIGNUP,
      component: SignUpScreen,
    },
    {
      name: screenNames.AUTH.LOGIN,
      component: LoginScreen,
    },
      {
      name: screenNames.APP.MAIN_DRAWER,
      component: DrawerNavigator,
    },
  ],

  DrawerNavigator: [
    {
      name: screenNames.APP.HOMESCREEN,
      component: HomeScreen,
    },
    // Add more drawer screens here if needed
  ],
};
