import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import screenNames from '../utils/screenName';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName={screenNames.APP.HOMESCREEN}>
      <Drawer.Screen name={screenNames.APP.HOMESCREEN} component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
