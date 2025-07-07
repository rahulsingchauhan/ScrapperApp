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
import ForgetPassword from "../auth/ForgetPassword/ForgetPassword";
import EmailOtp from "../auth/EmailOtp/EmailOtp";
import NewPassword from "../auth/NewPassword/NewPassword";
import DetailsScreen from "../screens/Details/DetailsScreen";



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
      name: screenNames.AUTH.FORGET_PASSWORD,
      component: ForgetPassword,
    },
    {
      name: screenNames.AUTH.EMAIL_OTP,
      component: EmailOtp,
    },
      {
      name: screenNames.APP.MAIN_DRAWER,
      component: DrawerNavigator,
    },
    {
name: screenNames.AUTH.NEW_PASSWORD,
 component: NewPassword,
    },
        {
name: screenNames.APP.DETAILSCREEN,
 component: DetailsScreen,
    },
      {
      name: screenNames.APP.HOMESCREEN,
      component: HomeScreen,
    },
  ],
  DrawerNavigator: [
    {
      name: screenNames.APP.HOMESCREEN,
      component: HomeScreen,
    },
  
  ],
};
