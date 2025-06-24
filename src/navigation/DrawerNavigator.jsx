import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import screenNames from '../utils/screenName';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" >
      <Drawer.Screen name={screenNames.APP.HomeScreen} component={HomeScreen} />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
