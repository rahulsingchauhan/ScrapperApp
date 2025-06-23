import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { Formik } from 'formik';
import * as Yup from 'yup';

const { width } = Dimensions.get('window');

const SignUpScreen = () => {
  const [secureText, setSecureText] = useState(true);

  const SignUpSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Full name is required')
      .min(3, 'Full name must be at least 3 characters')
      .max(50, 'Full name must be less than 50 characters')
      .matches(/^[a-zA-Z\s]+$/, 'Only alphabets and spaces are allowed'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email or mobile is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.root}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 20}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollWrapper}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            {/* LOGO */}
            <Image
              source={require('../../assets/images/LOGO.png')}
              style={styles.logo}
              resizeMode="contain"
            />

            {/* Title & Subtitle */}
            <View style={styles.textWrapper}>
              <Text style={styles.title}>Sign Up</Text>
              <Text style={styles.subtitle}>
                Please fill up this form to create an account
              </Text>
            </View>

            <Formik
              initialValues={{ fullName: '', email: '', password: '' }}
              validationSchema={SignUpSchema}
              onSubmit={values => {
                console.log('Form Values:', values);
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View style={styles.signUpForm}>
                  {/* Full Name Input */}
                  <View style={styles.inputWrapper}>
                    <Icon
                      name="account"
                      size={20}
                      color="#999"
                      style={styles.icon}
                    />
                    <TextInput
                      placeholder="Full Name"
                      style={styles.input}
                      placeholderTextColor="#999"
                      onChangeText={handleChange('fullName')}
                      onBlur={handleBlur('fullName')}
                      value={values.fullName}
                    />
                  </View>
                  {touched.fullName && errors.fullName && (
                    <Text style={styles.error}>{errors.fullName}</Text>
                  )}

                  {/* Email Input */}
                  <View style={styles.inputWrapper}>
                    <Icon
                      name="email-outline"
                      size={20}
                      color="#999"
                      style={styles.icon}
                    />
                    <TextInput
                      placeholder="Email Address / Mobile number"
                      style={styles.input}
                      placeholderTextColor="#999"
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.error}>{errors.email}</Text>
                  )}

                  {/* Password Input */}
                  <View style={styles.inputWrapper}>
                    <Feather
                      name="lock"
                      size={20}
                      color="#999"
                      style={styles.icon}
                    />
                    <TextInput
                      placeholder="Password"
                      secureTextEntry={secureText}
                      style={styles.input}
                      placeholderTextColor="#999"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    <TouchableOpacity
                      onPress={() => setSecureText(!secureText)}
                      style={styles.rightIcon}
                    >
                      <Feather
                        name={secureText ? 'eye-off' : 'eye'}
                        size={20}
                        color="#999"
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}

                  {/* Sign Up Button */}
                  <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.signUpText}>Sign Up</Text>
                  </TouchableOpacity>
                <View style={styles.bottomTextWrapper}>
                    <Text style={styles.bottomText}>Alredy have an account? </Text>
                    <TouchableOpacity onPress={() => console.log('Navigate to SignUp')}>
                      <Text style={styles.login}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 70,
    marginBottom: 15,
  },
  textWrapper: {
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#999999',
  },
  signUpForm: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  icon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
  signUpButton: {
    width: '100%',
    backgroundColor: '#FB5B2B',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 5,
    marginBottom: 15,
  },
  signUpText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginLeft: 5,
  },
  bottomTextWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  bottomText: {
    color: '#999',
    fontSize: 14,
  },
  login: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
