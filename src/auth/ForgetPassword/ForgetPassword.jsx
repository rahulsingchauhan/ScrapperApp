import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './Styles';

import { ImageIndex } from '../../assets/ImageIndex';
import CustomHeader from '../../components/Header/CustomHeader ';

const ForgetPassword = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      {/* Custom Header at top with back button */}
      <CustomHeader
        onBackPress={() => navigation.goBack()}
        backIcon={ImageIndex.back}
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPassword;
