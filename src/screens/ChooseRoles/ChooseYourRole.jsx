import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';
import screenNames from '../../utils/screenName';
import { ImageIndex } from '../../assets/ImageIndex';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChooseYourRole = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* LOGO */}
      <Image
        source={ImageIndex.splashLogo}
        style={styles.logo}
        resizeMode="contain"
      />

    {/* Title */}
<View style={styles.textWrapper}>
  <Text style={styles.title}>Choose Your Role</Text>
  <Text style={styles.subtitle}>Select how you want to use ScrapApp</Text>
</View>


      {/* Illustration */}
      <Image
        source={ImageIndex.role}
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Role Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() =>
            navigation.navigate(screenNames.ONBOARDING.READY_TO_START)
          }>
          <Image source={ImageIndex.customer} style={styles.roleIcon} resizeMode="contain" />
          <Text style={styles.buttonText}>Customer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roleButton}
          onPress={() =>
            navigation.navigate(screenNames.ONBOARDING.READY_TO_START)
            
          }>
          <Image source={ImageIndex.scrapper} style={styles.roleIcon} resizeMode="contain" />
          <Text style={styles.buttonText}>Scrapper</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChooseYourRole;
