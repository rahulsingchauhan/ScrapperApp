// src/screens/Splash/SplashScreen.jsx

import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles';
import screenNames from '../../utils/screenName';
import { ImageIndex } from '../../assets/ImageIndex';


const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // 👇 Navigate to MainDrawer after 3 seconds (replace to avoid back to splash)
    
      navigation.replace(screenNames.ONBOARDING.WELCOME);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={ImageIndex.splashLogo}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;
