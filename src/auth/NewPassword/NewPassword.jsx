import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { styles } from './Styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Feather from 'react-native-vector-icons/Feather';
import { ImageIndex } from '../../assets/ImageIndex';
import CustomHeader from '../../components/Header/CustomHeader ';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import screenNames from '../../utils/screenName';
import { SafeAreaView } from 'react-native-safe-area-context';

const NewPassword = ({ navigation, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Minimum 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor:'#fff'}}>
      <StatusBar />
      <CustomHeader
        onBackPress={() => navigation.goBack()}
        backIcon={ImageIndex.back}
      />

      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.titleView}>
            <Text style={styles.title}>Create New Password</Text>
            <Text style={styles.subTitle}>
              Your new password must be different from previous used passwords.
            </Text>
          </View>

          <Formik
            initialValues={{ password: '', confirmPassword: '' }}
            validationSchema={validationSchema}
            onSubmit={values => {
              if (onSubmit) {
                onSubmit(values);
              }
            }}
          >
            {({ handleChange, handleBlur, values, errors, touched }) => (
              <View style={styles.formContainer}>
                {/* Grouped View */}
                <View style={styles.passwordGroup}>

                  {/* Password */}
                  <View style={styles.inputWrapper}>
                    <Feather name="lock" size={20} color="#999" style={styles.icon} />
                    <TextInput
                      placeholder="Password"
                      secureTextEntry={!showPassword}
                      style={styles.input}
                      placeholderTextColor="#999"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                      style={styles.rightIcon}
                    >
                      <Feather
                        name={showPassword ? 'eye-off' : 'eye'}
                        size={20}
                        color="#999"
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}

                  {/* Confirm Password */}
                  <View style={styles.inputWrapper}>
                    <Feather name="lock" size={20} color="#999" style={styles.icon} />
                    <TextInput
                      placeholder="Confirm Password"
                      secureTextEntry={!showConfirm}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                      style={styles.input}
                    />
                    <TouchableOpacity
                      onPress={() => setShowConfirm(!showConfirm)}
                      style={styles.rightIcon}
                    >
                      <Feather
                        name={showConfirm ? 'eye-off' : 'eye'}
                        size={20}
                        color="#999"
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.confirmPassword && errors.confirmPassword && (
                    <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                  )}
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>

        <PrimaryButton
          title="Submit"
          onPress={() => navigation.navigate(screenNames.APP.MAIN_DRAWER)}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewPassword;
