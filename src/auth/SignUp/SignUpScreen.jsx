import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
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

const SignUpScreen = ({ navigation }) => {
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
      <KeyboardAvoidingView style={styles.root}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollWrapper}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <Image
              source={require('../../assets/images/LOGO.png')}
              style={styles.logo}
              resizeMode="contain"
            />

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

                  <TouchableOpacity
                    style={styles.signUpButton}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.signUpText}>Sign Up</Text>
                  </TouchableOpacity>

                  <View style={styles.bottomTextWrapper}>
                    <Text style={styles.bottomText}>
                      Already have an account?{' '}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(screenNames.AUTH.LOGIN)
                      }
                    >
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
