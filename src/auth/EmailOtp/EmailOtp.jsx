import React, { useRef, useState } from 'react';
import { Text, View, ScrollView, TextInput, Alert, Keyboard } from 'react-native';
import { styles } from './Styles';
import { ImageIndex } from '../../assets/ImageIndex';
import CustomHeader from '../../components/Header/CustomHeader ';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import screenNames from '../../utils/screenName';

const EmailOtp = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];

    // If backspace (text becomes empty)
    if (text === '') {
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) inputs[index - 1].current.focus();
      return;
    }

    // If digit entered
    if (/^\d$/.test(text)) {
      newOtp[index] = text;
      setOtp(newOtp);
      if (index < 3) {
        inputs[index + 1].current.focus();
      } else {
        Keyboard.dismiss();
      }
    }
  };

  const handleSubmit = () => {
    if (otp.includes('')) {
      Alert.alert('Error', 'Please enter all 4 digits of the OTP.');
      return;
    }
    const fullOtp = otp.join('');
    console.log('Entered OTP:', fullOtp);
    navigation.navigate(screenNames.AUTH.NEW_PASSWORD);
  };

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        onPress={() => navigation.goBack()}
        Icon={ImageIndex.back}
      />
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.titleView}>
            <Text style={styles.title}>Check Your Mail</Text>
            <Text style={styles.subTitle}>
              Please put the 4 digits sent to you
            </Text>
          </View>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={inputs[index]}
                style={styles.otpInput}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
              />
            ))}
          </View>
        </ScrollView>

        <PrimaryButton
  title="Submit"
  onPress={() => {
    handleSubmit();
    setOtp(['', '', '', '']); // reset OTP boxes
  }}
/>
      </View>
    </View>
  );
};

export default EmailOtp;
