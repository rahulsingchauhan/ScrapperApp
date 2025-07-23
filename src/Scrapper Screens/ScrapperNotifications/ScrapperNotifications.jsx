import {Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './Styles.jsx';
import CustomHeader from '../../components/Header/CustomHeader .jsx';
import { ImageIndex } from '../../assets/ImageIndex.js';

const ScrapperNotifications = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <CustomHeader
            title="Notifications"
            onPress={() => navigation.goBack()}
            Icon={ImageIndex.back}
          />
    </SafeAreaView>
  )
}

export default ScrapperNotifications

