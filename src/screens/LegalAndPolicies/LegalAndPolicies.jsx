import React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { styles } from './Styles';
import { ImageIndex } from '../../assets/ImageIndex';
import CustomHeader from '../../components/Header/CustomHeader ';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../theme/colors';


const LegalAndPolicies = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.backGround }}>
      <CustomHeader
        title="Legal & Policies"
        onPress={() => navigation.openDrawer()}
        Icon={ImageIndex.primaryDrawerIcon}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Illustration Image */}
        <View style={styles.illustrator}>
          <Image
            source={ImageIndex.termsIlustrator} 
            style={styles.illustrationImage}
            resizeMode="contain"
          />
        </View>

        {/* Heading and Text */}
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Terms And Condition</Text>
          <Text style={styles.subText}>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural
          </Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur. Proin urna lorem odio consectetur pharetra nisl sit at. Ut venenatis in id tortor arcu libero tempor orci felis. Metus mi venenatis accumsan mi. Id molestie ipsum egestas varius mollis tellus neque eu ultrices eget. Nisl laoreet fermentum nisl placerat massa nec ut aliquam. Nulla pellentesque diam tortor at consequat a et consectetur.
          </Text>
          <Text style={styles.paragraph}>
            Dignissim donec arcu nascetur eget. Massa egestas eros pulvinar morbi. Magna venenatis quam orci id in vestibulum ultrices tortor. Nibh porttitor ornare lorem sollicitudin arcu duis gravida enim sodales. Nisl pellentesque at amet. Ut diam integer.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LegalAndPolicies;
