import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  Switch,
} from 'react-native';
import { styles } from './Styles.jsx';
import screenNames from '../../utils/screenName';
import CustomHeader from '../../components/Header/CustomHeader ';
import { ImageIndex } from '../../assets/ImageIndex';
import PrimaryButton from '../../components/Buttons/PrimaryButton.jsx';

const Notifications = ({ navigation }) => {
  const [generalNotification, setGeneralNotification] = useState(true);
  const [sound, setSound] = useState(false);
  const [vibrate, setVibrate] = useState(false);
  const [appUpdates, setAppUpdates] = useState(true);

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        title="Notifications"
        onPress={() => navigation.goBack()}
        backIcon={ImageIndex.back}
      />

      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.switchWrapper}>
            <View style={styles.switchRow}>
              <Text style={styles.label}>General Notification</Text>
              <Switch
                value={generalNotification}
                onValueChange={setGeneralNotification}
                thumbColor={generalNotification ? '#fff' : '#fff'}
                trackColor={{ false: '#ccc', true: '#FF5722' }}
              />
            </View>

            <View style={styles.switchRow}>
              <Text style={styles.label}>Sound</Text>
              <Switch
                value={sound}
                onValueChange={setSound}
                thumbColor={sound ? '#fff' : '#fff'}
                trackColor={{ false: '#ccc', true: '#FF5722' }}
              />
            </View>

            <View style={styles.switchRow}>
              <Text style={styles.label}>Vibrate</Text>
              <Switch
                value={vibrate}
                onValueChange={setVibrate}
                thumbColor={vibrate ? '#fff' : '#fff'}
                trackColor={{ false: '#ccc', true: '#FF5722' }}
              />
            </View>

            <View style={styles.switchRow}>
              <Text style={styles.label}>App Updates</Text>
              <Switch
                value={appUpdates}
                onValueChange={setAppUpdates}
                thumbColor={appUpdates ? '#fff' : '#fff'}
                trackColor={{ false: '#ccc', true: '#FF5722' }}
              />
            </View>
          </View>
        </ScrollView>

        <PrimaryButton title="Submit" />
      </View>
    </View>
  );
};

export default Notifications;
