import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/Header/CustomHeader ';
import { styles } from './Styles';
import { ImageIndex } from '../../assets/ImageIndex';
const notifications = [
  {
    id: '1',
    title: 'Scrapper Accepted Your Item!',
    message: 'A scrapper is on the way to pick up your item.',
    link: 'View Status',
    time: '07:56 PM',
  },
  {
    id: '2',
    title: 'Your Item Was Marked as Taken',
    message: 'our scrap listing has been successfully picked up.',
    time: '07:56 PM',
  },
  {
    id: '3',
    title: 'Subscription Renewal Reminder',
    message: 'Your subscription expires in 3 days. Renew now to continue pickups.',
    link: 'Renew Now',
    time: '07:56 PM',
  },
];


const ScrapperNotifications = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.notification}>
      <View style={styles.iconWrapper}>
        <View style={styles.bellIcon}>
  <Image source={ImageIndex.Scrappernotification} style={styles.bellImage} resizeMode="contain" />
</View>

      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
        {item.link && (
          <TouchableOpacity>
            <Text style={styles.link}>{item.link}</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Notification" 
      Icon={ImageIndex.back}
      onPress={() => navigation.goBack()}/>
      
      <View style={styles.SideText}>
        <Text style={styles.Heading}>Today</Text>
      </View>
      <FlatList data={notifications} keyExtractor={item => item.id} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default ScrapperNotifications;
