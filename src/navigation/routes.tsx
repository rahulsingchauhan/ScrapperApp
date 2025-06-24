import { Component } from "react";
import StackNavigator from "./StackNavigator";
import DrawerNavigator from "./DrawerNavigator";
import SplashScreen from "../screens/Splash/SplashScreen";
import WelcomeScreen from "../screens/Welcome/WelcomeScreen";
import ChooseYourRole from "../screens/ChooseRoles/ChooseYourRole";
import ReadyToStart from "../screens/ReadyToStart/ReadyToStart";
import SignUpScreen from "../auth/SignUp/SignUpScreen";
import LoginScreen from "../auth/Login/LoginScreen";

export const routes = {
StackNavigator:[

{
    name: "Drawer",
component: DrawerNavigator,
},
{
    name : "Splash",
component: SplashScreen,
},
{
    name : "Welcome",
component: WelcomeScreen,
},{
    name : "Choose_Role",
component: ChooseYourRole,
},{
    name : "ReadyToStart",
component: ReadyToStart,
},{
    name : "SignUp",
component: SignUpScreen,
},{
    name : "LoginScreen",
component: LoginScreen,
},
]

};