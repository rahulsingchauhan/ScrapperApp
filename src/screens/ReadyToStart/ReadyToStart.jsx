import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ReadyToStart = () => {
  return (
    <View style={styles.container}>
      {/* LOGO */}
      <Image
        source={require('../../assets/images/LOGO.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Illustration */}
      <Image
        source={require('../../assets/images/Ready.png')}
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Ready To Start ?</Text>
      <Text style={styles.subtitle}>Sign in or create an account to unlock all Features!</Text>

      

      {/* Role Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.SignUpButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.SignInButton}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReadyToStart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 60,
    marginBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  illustration: {
    width: 220,
    height: 160,
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
    paddingTop:30,
  },
  SignUpButton: {
    borderWidth: 1,
    borderColor: '#FB5B2B',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
    height: '40%',
    backgroundColor: '#FB5B2B',
  },
    SignInButton: {
     borderWidth: 1,
    borderColor: '#FB5B2B',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
    height: '40%',
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
