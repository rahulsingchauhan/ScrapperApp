import React, { useState } from 'react';
import {
  View,
  Text,
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
import { styles } from './Styles';
import screenNames from '../../utils/screenName';
import { ImageIndex } from '../../assets/ImageIndex';

const { width } = Dimensions.get('window');

const LoginScreen = ({navigation}) => {
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
              source={ImageIndex.logo}
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
                    <TouchableOpacity onPress={() => navigation.navigate(screenNames.AUTH.SIGNUP)}>
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

