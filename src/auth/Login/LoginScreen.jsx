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

const LoginScreen = () => {
  const [secureText, setSecureText] = useState(true);

  const LoginSchema = Yup.object().shape({
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
              <Text style={styles.title}>Login</Text>
              <Text style={styles.subtitle}>Enter Your Email or Password</Text>
            </View>

            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={LoginSchema}
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
                <View style={styles.loginForm}>
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

                  {/* Forgot Password */}
                  <TouchableOpacity style={styles.forgetPasswordButton}>
                    <Text style={styles.forgetPasswordText}>
                      Forgot your password?
                    </Text>
                  </TouchableOpacity>

                  {/* Sign In Button */}
                  <TouchableOpacity
                    style={styles.signInButton}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.signInText}>Sign In</Text>
                  </TouchableOpacity>

                  {/* Bottom Text */}
                  <View style={styles.bottomTextWrapper}>
                    <Text style={styles.bottomText}>Don’t have an account? </Text>
                    <TouchableOpacity onPress={() => console.log('Navigate to SignUp')}>
                      <Text style={styles.signup}>Sign up</Text>
                    </TouchableOpacity>
                  </View>

                  {/* OR */}
                  <Text style={styles.orText}>OR</Text>

                  {/* Google Icon */}
                  <TouchableOpacity>
                    <Image
                      source={require('../../assets/icons/GoogleLogo.png')}
                      style={styles.googleIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
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
  loginForm: {
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
  forgetPasswordButton: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
  forgetPasswordText: {
    color: '#000',
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  signInButton: {
    width: '100%',
    backgroundColor: '#FB5B2B',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 5,
    marginBottom: 15,
  },
  signInText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
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
  signup: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  googleIcon: {
    width: 25,
    height: 25,
    marginTop: 15,
  },
  orText: {
    fontWeight: 'bold',
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  error: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginLeft: 5,
  },
});
