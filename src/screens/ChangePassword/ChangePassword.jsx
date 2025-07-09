import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { styles } from './Styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Feather from 'react-native-vector-icons/Feather';
import { ImageIndex } from '../../assets/ImageIndex';

import PrimaryButton from '../../components/Buttons/PrimaryButton';
import screenNames from '../../utils/screenName';
import CustomHeader from '../../components/Header/CustomHeader ';

const ChangePassword = ({ navigation, onSubmit }) => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Old password is required'),
    newPassword: Yup.string()
      .min(6, 'Minimum 6 characters')
      .required('New password is required'),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        title="Change Password"
        onPress={() => navigation.openDrawer()}
        Icon={ImageIndex.primaryDrawerIcon}
      />

      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          

          <Formik
            initialValues={{
              oldPassword: '',
              newPassword: '',
              confirmNewPassword: '',
            }}
            validationSchema={validationSchema}
            onSubmit={values => {
              if (onSubmit) {
                onSubmit(values);
              }
            }}
          >
            {({
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
              handleSubmit,
            }) => (
              <View style={styles.formContainer}>
                {/* Old Password */}
                <View style={styles.inputWrapper}>
                  <Feather
                    name="lock"
                    size={20}
                    color="#999"
                    style={styles.icon}
                  />
                  <TextInput
                    placeholder="Old Password"
                    secureTextEntry={!showOld}
                    style={styles.input}
                    placeholderTextColor="#999"
                    onChangeText={handleChange('oldPassword')}
                    onBlur={handleBlur('oldPassword')}
                    value={values.oldPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowOld(!showOld)}
                    style={styles.rightIcon}
                  >
                    <Feather
                      name={showOld ? 'eye-off' : 'eye'}
                      size={20}
                      color="#999"
                    />
                  </TouchableOpacity>
                </View>
                {touched.oldPassword && errors.oldPassword && (
                  <Text style={styles.errorText}>{errors.oldPassword}</Text>
                )}

                {/* New Password */}
                <View style={styles.inputWrapper}>
                  <Feather
                    name="lock"
                    size={20}
                    color="#999"
                    style={styles.icon}
                  />
                  <TextInput
                    placeholder="New Password"
                    secureTextEntry={!showNew}
                    style={styles.input}
                    placeholderTextColor="#999"
                    onChangeText={handleChange('newPassword')}
                    onBlur={handleBlur('newPassword')}
                    value={values.newPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowNew(!showNew)}
                    style={styles.rightIcon}
                  >
                    <Feather
                      name={showNew ? 'eye-off' : 'eye'}
                      size={20}
                      color="#999"
                    />
                  </TouchableOpacity>
                </View>
                {touched.newPassword && errors.newPassword && (
                  <Text style={styles.errorText}>{errors.newPassword}</Text>
                )}

                {/* Confirm New Password */}
                <View style={styles.inputWrapper}>
                  <Feather
                    name="lock"
                    size={20}
                    color="#999"
                    style={styles.icon}
                  />
                  <TextInput
                    placeholder="Confirm New Password"
                    secureTextEntry={!showConfirm}
                    onChangeText={handleChange('confirmNewPassword')}
                    onBlur={handleBlur('confirmNewPassword')}
                    value={values.confirmNewPassword}
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
                {touched.confirmNewPassword && errors.confirmNewPassword && (
                  <Text style={styles.errorText}>
                    {errors.confirmNewPassword}
                  </Text>
                )}
              </View>
            )}
          </Formik>
        </ScrollView>

        <PrimaryButton
          title="Submit"
          onPress={() => navigation.navigate(screenNames.APP.MAIN_DRAWER)}
        />
      </View>
    </View>
  );
};

export default ChangePassword;
