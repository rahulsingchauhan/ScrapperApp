import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './Styles';

const ChooseYourRole = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* LOGO */}
      <Image
        source={require('../../assets/images/LOGO.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Choose Your Role</Text>
      <Text style={styles.subtitle}>Select how you want to use ScrapApp</Text>

      {/* Illustration */}
      <Image
        source={require('../../assets/images/undraw_selection.png')}
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Role Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.roleButton} onPress={() => navigation.navigate('ReadyToStart')}>
          <Ionicons name="person" size={24} color="#ff5c00" />
          <Text style={styles.buttonText}>Customer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.roleButton} onPress={() => navigation.navigate('ReadyToStart')}>
          <Ionicons name="construct" size={24} color="#ff5c00" />
          <Text style={styles.buttonText}>Scrapper</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChooseYourRole;

