import { useRef, useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import screenNames from '../../utils/screenName';

const useOtpHandler = (navigation) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const inputs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];

    if (text === '') {
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) inputs[index - 1].current.focus();
      return;
    }

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

  return {
    otp,
    setOtp,
    focusedIndex,
    setFocusedIndex,
    inputs,
    handleOtpChange,
    handleSubmit,
  };
};

export default useOtpHandler;
