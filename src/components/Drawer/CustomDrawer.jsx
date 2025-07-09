import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { ImageIndex } from '../../assets/ImageIndex';
import screenNames from '../../utils/screenName';
import Colors from '../../theme/colors';

const DrawerItem = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Image source={icon} style={styles.icon} />
    <Text style={styles.label}>{label}</Text>
    <Image source={ImageIndex.rightArrow} style={styles.arrowIcon} />
  </TouchableOpacity>
);

const CustomDrawer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        contentContainerStyle={{ paddingTop: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={ImageIndex.splashLogo} style={styles.logo} />
        </View>

        <DrawerItem
          icon={ImageIndex.subscription}
          label="Subscription"
          onPress={() => navigation.navigate('Subscription')}
        />
        <DrawerItem
          icon={ImageIndex.changePassword}
          label="Change Password"
          onPress={() => navigation.navigate(screenNames.DRAWER.CHANGE_PASSWORD)}
        />
        <DrawerItem
          icon={ImageIndex.notification}
          label="Notification"
          onPress={() => navigation.navigate('Notification')}
        />
        <DrawerItem
          icon={ImageIndex.legal}
          label="Legal and Policies"
          onPress={() => navigation.navigate('Legal')}
        />
        <DrawerItem
          icon={ImageIndex.help}
          label="Help & Support"
          onPress={() => navigation.navigate('Help')}
        />
      </DrawerContentScrollView>

      {/* Logout */}
      <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate(screenNames.AUTH.LOGIN)}>
        <Image source={ImageIndex.logout} style={styles.icon} />
        <Text style={styles.logoutText}>Log Out</Text>
        
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 4,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 16,
  },
  arrowIcon: {
    marginLeft: 'auto',
    width: 20,
    height: 20,
  },
  label: {
    fontSize: 18,
    color: Colors.black,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  logoutText: {
    fontSize: 18,
    color: '#FF5A3C',
    marginLeft: 16,
  },
});

export default CustomDrawer;
