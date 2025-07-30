import React from 'react';
import { Text, View, ScrollView, TextInput, Image } from 'react-native';
import { styles } from './Styles';
import { ImageIndex } from '../../assets/ImageIndex';
import CustomHeader from '../../components/Header/CustomHeader ';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import Colors from '../../theme/colors';
import useOtpHandler from './useOtpHandler'; 

const EmailOtp = ({ navigation }) => {

  const {
    otp,
    setOtp,
    focusedIndex,
    setFocusedIndex,
    inputs,
    handleOtpChange,
    handleSubmit,
  } = useOtpHandler(navigation);

  return (
    <View style={styles.container}>
      <CustomHeader
        onPress={() => navigation.goBack()}
        Icon={ImageIndex.back}
      />

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
              style={[
                styles.otpInput,
                focusedIndex === index && { backgroundColor: Colors.backGround}
              ]}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
            />
          ))}
        </View>
        <View style={styles.imageView}>
            <Image
              source={ImageIndex.otpIlustrator}
              style={styles.helpImage}
              resizeMode="contain"
            />
          </View>
      </ScrollView>

      <PrimaryButton
        title="Submit"
        onPress={() => {
          handleSubmit();
          setOtp(['', '', '', '']); 
        }}
      />
    </View>
  );
};

export default EmailOtp;
