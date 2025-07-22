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
import { SafeAreaView } from 'react-native-safe-area-context';

const Help = ({ navigation }) => {
  const [message, setMessage] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
 <CustomHeader
        title="Help and Support"
        onPress={() => navigation.openDrawer()}
      Icon={ImageIndex.primaryDrawerIcon}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* 🧑‍💻 Support Image */}
          <View style={styles.imageView}>
            <Image
              source={ImageIndex.helpIlustrator} // Replace with your actual image
              style={styles.helpImage}
              resizeMode="contain"
            />
          </View>

          {/* 📝 Text Input */}
          <View style={styles.inputView}>
            <Text style={styles.label}>How can we help?</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Type Here..."
              value={message}
              onChangeText={setMessage}
              multiline
              numberOfLines={5}
              textAlignVertical="top"
            />
          </View>
        </ScrollView>

        <PrimaryButton title="Submit" onPress={() => console.log(message)} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Help;
