import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Styles';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { ImageIndex } from '../../assets/ImageIndex';
import screenNames from '../../utils/screenName';

const HomeScreen = ({ navigation }) => {
  const cardData = {
    title: 'Old Metal Pipes',
    category: 'Metal Scrap',
    time: '12 hours',
    image:ImageIndex.metal, 
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.titleView}>
        <Text style={styles.title}>Hi, Ronaldo</Text>
        <Text style={styles.subTitle}>Welcome Back</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonView}>
        <PrimaryButton title="Active Listing" width="47%" />
        <PrimaryButton title="Past Listing" width="47%" />
      </View>

      {/* Search */}
      <View style={styles.searchView}>
        <Image source={ImageIndex.search} style={styles.icon} />
        <TextInput style={styles.input} placeholder="Search" placeholderTextColor="#000" />
        <TouchableOpacity>
          <Image source={ImageIndex.filter} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Card */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Details', { data: cardData })}>
        <Image source={cardData.image} style={styles.cardImage} />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{cardData.title}</Text>
          <Text style={styles.cardCategory}>{cardData.category}</Text>
          <View style={styles.timeRow}>
            <Image source={ImageIndex.clock} style={styles.timeIcon} />
            <Text style={styles.timeText}>{cardData.time}</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Floating Button */}
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate(screenNames.APP.POSTSCRAP)}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
