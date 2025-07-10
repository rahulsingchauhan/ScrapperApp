import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/Home/HomeScreen';
import screenNames from '../utils/screenName';
import CustomDrawer from '../components/Drawer/CustomDrawer';
import ChangePassword from '../screens/ChangePassword/ChangePassword';
import Help from '../screens/HelpAndSupport/Help';
import LegalAndPolicies from '../screens/LegalAndPolicies/LegalAndPolicies';

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
       <Drawer.Screen name={screenNames.DRAWER.HELP_AND_SUPPORT} component={Help}/>
       <Drawer.Screen name={screenNames.DRAWER.CHANGE_PASSWORD} component={ChangePassword} />
<Drawer.Screen name={screenNames.DRAWER.LEGAL_AND_POLICIES} component={LegalAndPolicies}/>
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
