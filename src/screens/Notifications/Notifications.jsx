import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Switch,
} from 'react-native';
import { styles } from './Styles.jsx';
import CustomHeader from '../../components/Header/CustomHeader ';
import { ImageIndex } from '../../assets/ImageIndex';
import PrimaryButton from '../../components/Buttons/PrimaryButton.jsx';
import { SafeAreaView } from 'react-native-safe-area-context';

const Notifications = ({ navigation }) => {
  const [generalNotification, setGeneralNotification] = useState(true);
  const [sound, setSound] = useState(false);
  const [vibrate, setVibrate] = useState(false);
  const [appUpdates, setAppUpdates] = useState(true);

  return (
 
     

      <SafeAreaView style={styles.container}>
         <CustomHeader
        title="Notifications"
        onPress={() => navigation.goBack()}
        Icon={ImageIndex.back}
      />
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
        <View style={styles.switchWrapper}>
  <View style={styles.switchRow}>
    <Text style={styles.label}>General Notification</Text>
    <View style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.2 }] }}>
      <Switch
        value={generalNotification}
        onValueChange={setGeneralNotification}
        thumbColor={generalNotification ? '#fff' : '#fff'}
        trackColor={{ false: '#ccc', true: '#FF5722' }}
      />
    </View>
  </View>

  <View style={styles.switchRow}>
    <Text style={styles.label}>Sound</Text>
    <View style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.2 }] }}>
      <Switch
        value={sound}
        onValueChange={setSound}
        thumbColor={sound ? '#fff' : '#fff'}
        trackColor={{ false: '#ccc', true: '#FF5722' }}
      />
    </View>
  </View>

  <View style={styles.switchRow}>
    <Text style={styles.label}>Vibrate</Text>
    <View style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.2 }] }}>
      <Switch
        value={vibrate}
        onValueChange={setVibrate}
        thumbColor={vibrate ? '#fff' : '#fff'}
        trackColor={{ false: '#ccc', true: '#FF5722' }}
      />
    </View>
  </View>

  <View style={styles.switchRow}>
    <Text style={styles.label}>App Updates</Text>
    <View style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.2 }] }}>
      <Switch
        value={appUpdates}
        onValueChange={setAppUpdates}
        thumbColor={appUpdates ? '#fff' : '#fff'}
        trackColor={{ false: '#ccc', true: '#FF5722' }}
      />
    </View>
  </View>
</View>

        </ScrollView>

        <PrimaryButton title="Submit" />
      </SafeAreaView>
 
  );
};

export default Notifications;
