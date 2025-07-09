import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from './Styles.jsx';

import { ImageIndex } from '../../assets/ImageIndex';
import PrimaryButton from '../../components/Buttons/PrimaryButton.jsx';
import CustomHeader from '../../components/Header/CustomHeader .jsx';

const LegalAndPolicies = ({ navigation }) => {
 

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
 <CustomHeader
        title="Help and Support"
        onPress={() => navigation.openDrawer()}
      Icon={ImageIndex.primaryDrawerIcon}
      />

      
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          
        </ScrollView>

    
     
    </View>
  );
};

export default LegalAndPolicies;
