import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';
import screenNames from '../../utils/screenName';
import { ImageIndex } from '../../assets/ImageIndex';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

const ChooseYourRole = ({ navigation }) => {

  // 🔹 Function to handle role selection and save it in AsyncStorage
  const handleRoleSelection = async (role) => {
    try {
      await AsyncStorage.setItem('userType', role); //Save the selected role
      console.log(role)
      navigation.navigate(screenNames.ONBOARDING.READY_TO_START); 
    } catch (error) {
      console.log('Error saving userType:', error); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      
   
      <Image
        source={ImageIndex.splashLogo}
        style={styles.logo}
        resizeMode="contain"
      />

  
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Choose Your Role</Text>
        <Text style={styles.subtitle}>Select how you want to use ScrapApp</Text>
      </View>

    
      <Image
        source={ImageIndex.role}
        style={styles.illustration}
        resizeMode="contain"
      />

      <View style={styles.buttonRow}>
        
     
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => handleRoleSelection('customer')}>
          <Image
            source={ImageIndex.customer}
            style={styles.roleIcon}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>Customer</Text>
        </TouchableOpacity>

     
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => handleRoleSelection('scrapper')}>
          <Image
            source={ImageIndex.scrapper}
            style={styles.roleIcon}
            resizeMode="contain"
          />
          <Text style={styles.buttonText}>Scrapper</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default ChooseYourRole;
