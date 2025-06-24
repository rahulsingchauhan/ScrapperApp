import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './Styles';
import screenNames from '../../utils/screenName';
import { ImageIndex } from '../../assets/ImageIndex';

const ChooseYourRole = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* LOGO */}
      <Image
         source={ImageIndex.logo}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Choose Your Role</Text>
      <Text style={styles.subtitle}>Select how you want to use ScrapApp</Text>

      {/* Illustration */}
      <Image
        source={ImageIndex.role}
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Role Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.roleButton} onPress={() => navigation.navigate(screenNames.ONBOARDING.READY_TO_START)}>
          <Ionicons name="person" size={24} color="#ff5c00" />
          <Text style={styles.buttonText}>Customer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roleButton} onPress={() => navigation.navigate(screenNames.ONBOARDING.READY_TO_START)}>
          <Ionicons name="construct" size={24} color="#ff5c00" />
          <Text style={styles.buttonText}>Scrapper</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChooseYourRole;

