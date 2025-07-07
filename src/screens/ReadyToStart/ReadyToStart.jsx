import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';
import screenNames from '../../utils/screenName';
import { ImageIndex } from '../../assets/ImageIndex';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const ReadyToStart = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* LOGO */}
      <View style={styles.logoContainer}>
        <Image
          source={ImageIndex.logo}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Illustration */}
      <View style={styles.illustrationContainer}>
        <Image
          source={ImageIndex.ready}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      {/* Text Area */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>Ready To Start ?</Text>
        <Text style={styles.subtitle}>
          Sign in or create an account to unlock all Features!
        </Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {/* <TouchableOpacity
          style={styles.SignUpButton}
          onPress={() => navigation.navigate(screenNames.AUTH.SIGNUP)}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.SignInButton}
          onPress={() => navigation.navigate(screenNames.AUTH.LOGIN)}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity> */}
        <PrimaryButton width='48%' title='Sign Up' onPress={() => navigation.navigate(screenNames.AUTH.SIGNUP)}/>
        <PrimaryButton width='48%' title='Sign In' onPress={() => navigation.navigate(screenNames.AUTH.LOGIN)}/>
      </View>
      
    </View>
  );
};

export default ReadyToStart;
