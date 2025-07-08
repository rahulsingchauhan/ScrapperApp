import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import screenNames from '../utils/screenName';
import CustomDrawer from '../components/Drawer/CustomDrawer'; // custom drawer

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#fff',
          width: 300,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        },
      }}
      initialRouteName={screenNames.APP.HOMESCREEN}
    >
      <Drawer.Screen name={screenNames.APP.HOMESCREEN} component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
