import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { styles } from './Styles';

import { ImageIndex } from '../../assets/ImageIndex';
import CustomHeader from '../../components/Header/CustomHeader ';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import screenNames from '../../utils/screenName';

const ForgetPassword = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Custom Header at top with back button */}
      <CustomHeader
        onPress={() => navigation.goBack()}
        Icon={ImageIndex.back}
      />

      <View style={styles.container}>
        {/* Scrollable content section – keeps layout scrollable on smaller screens and in landscape */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Title Section */}
          <View style={styles.titleView}>
            <Text style={styles.title}>Password Reset</Text>
            <Text style={styles.subTitle}>
              Please put your mobile number to reset your password
            </Text>
          </View>

          {/* Email Info Row – responsive row with icon and text */}
          <View style={styles.infoRow}>
            <Image
              source={ImageIndex.email}
              style={styles.icon}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              <Text style={styles.emailTitle}>Email</Text>
              <Text style={styles.emailSubTitle}>rahulsingh@email.com</Text>
            </View>
          </View>
        </ScrollView>

        {/* Sticky Bottom Button – always at bottom regardless of screen size or orientation */}
        <PrimaryButton
  title="Submit"
  onPress={() => navigation.navigate(screenNames.AUTH.EMAIL_OTP)}
/>
      </View>
    </View>
  );
};

export default ForgetPassword;
