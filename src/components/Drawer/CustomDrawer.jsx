import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { ImageIndex } from '../../assets/ImageIndex'; // your icons here
import screenNames from '../../utils/screenName';

const DrawerItem = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <View style={styles.iconCircle}>
      <Image source={icon} style={styles.icon} />
    </View>
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
          <Image source={ImageIndex.logo} style={styles.logo} />
        </View>

        <DrawerItem
          icon={ImageIndex.subscription}
          label="Subscription"
          onPress={() => {}}
        />
        <DrawerItem
          icon={ImageIndex.password}
          label="Change Password"
          onPress={() => {}}
        />
        <DrawerItem
          icon={ImageIndex.notification}
          label="Notification"
          onPress={() => {}}
        />
        <DrawerItem
          icon={ImageIndex.legal}
          label="Legal and Policies"
          onPress={() => {}}
        />
        <DrawerItem
          icon={ImageIndex.help}
          label="Help & Support"
          onPress={() => {}}
        />
      </DrawerContentScrollView>

      {/* Logout */}
      <TouchableOpacity style={styles.logout}>
        <View style={styles.iconCircle}>
          <Image source={ImageIndex.logout} style={styles.icon} />
        </View>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
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
    paddingHorizontal: 16,
  },
  iconCircle: {
    width: 32,
    height: 32,
    backgroundColor: '#FF5A3C',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    width: 18,
    height: 18,
    tintColor: '#fff',
  },
  arrowIcon: {
    marginLeft: 'auto',
    width: 14,
    height: 14,
    tintColor: '#C4C4C4',
  },
  label: {
    fontSize: 15,
    color: '#333',
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
  },
  logoutText: {
    fontSize: 15,
    color: '#FF5A3C',
    marginLeft: 16,
  },
});

export default CustomDrawer;
