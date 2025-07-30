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
import { styles } from './Styles';
import screenNames from '../../utils/screenName';
import { ImageIndex } from '../../assets/ImageIndex';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../theme/colors';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import LoginSchema from '../../schema/LoginSchema';

const { width } = Dimensions.get('window');

const LoginScreen = ({ navigation }) => {
  const [secureText, setSecureText] = useState(true);



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
          <SafeAreaView style={styles.container}>
            {/* LOGO */}
            <Image
              source={ImageIndex.splashLogo}
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
                      color={Colors.subTitle}
                      style={styles.icon}
                    />
                    <TextInput
                      placeholder="Email Address / Mobile number"
                      style={styles.input}
                      placeholderTextColor={Colors.subTitle}
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
                      color={Colors.subTitle}
                      style={styles.icon}
                    />
                    <TextInput
                      placeholder="Password"
                      secureTextEntry={secureText}
                      style={styles.input}
                      placeholderTextColor={Colors.subTitle}
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
                        color={Colors.subTitle}
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.error}>{errors.password}</Text>
                  )}

                  <TouchableOpacity
                    style={styles.forgetPasswordButton}
                    onPress={() =>
                      navigation.navigate(screenNames.AUTH.FORGET_PASSWORD)
                    }
                  >
                    <Text style={styles.forgetPasswordText}>
                      Forgot your password?
                    </Text>
                  </TouchableOpacity>

                  <PrimaryButton // onPress={handleSubmit} API Calling ke Time Ye Wala Chalaenge
                    title="Sign In"
                    borderRadius={18}
                    onPress={() =>
                      navigation.navigate(screenNames.APP.MAIN_DRAWER)
                    }
                  />

                  <View style={styles.bottomTextWrapper}>
                    <Text style={styles.bottomText}>
                      Don’t have an account?{' '}
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(screenNames.AUTH.SIGNUP)
                      }
                    >
                      <Text style={styles.signup}>Sign up</Text>
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.orText}>OR</Text>

                  {/* Google Icon */}
                  <TouchableOpacity>
                    <Image
                      source={ImageIndex.google}
                      style={styles.googleIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
