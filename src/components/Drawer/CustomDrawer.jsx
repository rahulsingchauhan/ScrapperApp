import React, { useEffect, useState } from 'react';
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
import fonts from '../../utils/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage'; // ✅ Import AsyncStorage

const DrawerItem = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Image source={icon} style={styles.icon} />
    <Text style={styles.label}>{label}</Text>
    <Image source={ImageIndex.rightArrow} style={styles.arrowIcon} />
  </TouchableOpacity>
);

const CustomDrawer = ({ navigation }) => {
  const [userType, setUserType] = useState('');

  // ✅ Fetch userType from AsyncStorage when drawer mounts
  useEffect(() => {
    const getUserType = async () => {
      try {
        const type = await AsyncStorage.getItem('userType');
        setUserType(type || '');
      } catch (err) {
        console.log('Failed to fetch userType:', err);
      }
    };

    getUserType();
  }, []);

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

        {/* 🔽 Conditional Drawer Item based on userType */}
        {userType === 'scrapper' ? (
          <DrawerItem
            icon={ImageIndex.trackScrapper}
            label="Track Scrapper"
            onPress={() =>
              navigation.navigate(screenNames.DRAWER.SCRAPPER_TRACKING)
            }
          />
        ) : (
          <DrawerItem
            icon={ImageIndex.subscription}
            label="Subscription"
            onPress={() => navigation.navigate('Subscription')}
          />
        )}

        {/* Common Drawer Items */}
        <DrawerItem
          icon={ImageIndex.changePassword}
          label="Change Password"
          onPress={() =>
            navigation.navigate(screenNames.DRAWER.CHANGE_PASSWORD)
          }
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
      <TouchableOpacity
  style={styles.logout}
  onPress={async () => {
    try {
      await AsyncStorage.removeItem('userType'); // 🧹 Remove user type
      navigation.navigate(screenNames.ONBOARDING.CHOOSE_ROLE);
    } catch (error) {
      console.log('Logout error:', error);
    }
  }}
>
  <Image source={ImageIndex.logout} style={styles.icon} />
  <Text style={styles.logoutText}>Log Out</Text>
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backGround,
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
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  icon: {
    width: 35,
    height: 35,
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
    fontFamily: fonts.MEDIUM,
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#f0f0f0',
    marginBottom: 40,
  },
  logoutText: {
    fontSize: 18,
    color: Colors.black,
    marginLeft: 16,
    fontFamily: fonts.MEDIUM,
  },
});

export default CustomDrawer;
