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
import Colors from '../../theme/colors.tsx';

const Notifications = ({ navigation }) => {
  const [generalNotification, setGeneralNotification] = useState(true);
  const [sound, setSound] = useState(false);
  const [vibrate, setVibrate] = useState(false);
  const [appUpdates, setAppUpdates] = useState(true);

  const switchOptions = [
    { label: 'General Notification', value: generalNotification, setValue: setGeneralNotification },
    { label: 'Sound', value: sound, setValue: setSound },
    { label: 'Vibrate', value: vibrate, setValue: setVibrate },
    { label: 'App Updates', value: appUpdates, setValue: setAppUpdates },
  ];

  const handleSubmit = () => {
    // You can replace this with API or state handling
    console.log({
      generalNotification,
      sound,
      vibrate,
      appUpdates,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title="Notifications"
        onPress={() => navigation.openDrawer()}
        Icon={ImageIndex.primaryDrawerIcon}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.switchWrapper}>
          {switchOptions.map((item, index) => (
            <View key={index} style={styles.switchRow}>
              <Text style={styles.label}>{item.label}</Text>
              <View style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.2 }] }}>
                <Switch
                  value={item.value}
                  onValueChange={item.setValue}
                  thumbColor={Colors.backGround}
                  trackColor={{ false: '#ccc', true: Colors.primary }}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <PrimaryButton title="Submit" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default Notifications;
