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
import Feather from 'react-native-vector-icons/Feather';
import { ImageIndex } from '../../assets/ImageIndex';
import CustomHeader from '../../components/Header/CustomHeader ';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import screenNames from '../../utils/screenName';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../theme/colors';
import { validationSchema } from '../../schema/ForgetPassword';

const NewPassword = ({ navigation, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <CustomHeader
        onPress={() => navigation.goBack()}
        Icon={ImageIndex.back}
      />
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
                  <Feather
                    name="lock"
                    size={20}
                    color={Colors.subTitle}
                    style={styles.icon}
                  />
                  <TextInput
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    style={styles.input}
                    placeholderTextColor={Colors.subTitle}
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
                      color={Colors.subTitle}
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}

                {/* Confirm Password */}
                <View style={styles.inputWrapper}>
                  <Feather
                    name="lock"
                    size={20}
                    color={Colors.subTitle}
                    style={styles.icon}
                  />
                  <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={Colors.subTitle}
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
                      color={Colors.subTitle}
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
    </SafeAreaView>
  );
};

export default NewPassword;
