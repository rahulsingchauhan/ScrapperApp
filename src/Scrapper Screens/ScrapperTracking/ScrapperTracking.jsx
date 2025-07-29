import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { styles } from './Styles.jsx';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrimaryButton from '../../components/Buttons/PrimaryButton.jsx';

import CustomHeader from '../../components/Header/CustomHeader .jsx';
import { ImageIndex } from '../../assets/ImageIndex.tsx';

const ScrapperTracking = (navigation) => {
  const delhi = { latitude: 28.6139, longitude: 77.209 };
  const mumbai = { latitude: 19.076, longitude: 72.8777 };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader backgroundColor="transparent" title="Track Scrapper" Icon={ImageIndex.back}  onPress={() => navigation.goBack()}/>
      
      <MapView
        style={StyleSheet.absoluteFillObject}
        initialRegion={{
          latitude: 24.5,
          longitude: 75,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
      >
        {/* Marker for Delhi */}
        <Marker coordinate={delhi} title="Delhi" description="Capital of India" />

        {/* Marker for Mumbai */}
        <Marker coordinate={mumbai} title="Mumbai" description="Financial Capital of India" pinColor="blue" />

        {/* Polyline between Delhi and Mumbai */}
        <Polyline coordinates={[delhi, mumbai]} strokeColor="#FF5733" strokeWidth={3} />
      </MapView>

      <View style={styles.card}>
        <View style={styles.topRow}>
        <Image source={require('../../assets/images/location.png')} style={styles.icon} />
          <View>
            <Text style={styles.title}>Scrapper</Text>
            <Text style={styles.subtitle}>On the way · 24 June</Text>
          </View>
        </View>

        <View style={styles.progressBar}>
          <View style={styles.progress} />
          <View style={styles.circle} />
        </View>

        <View style={styles.locationRow}>
          <Text style={styles.fromText}>
            From{'\n'}
            <Text style={styles.cityText}>Delhi, India</Text>
          </Text>
          <Text style={styles.toText}>
            To{'\n'}
            <Text style={styles.cityText}>Mumbai, India</Text>
          </Text>
        </View>
      </View>

      <View style={styles.buttonView}>
        <PrimaryButton
          style={{ height: '30%' }}
          title="END TRACKING"
          borderRadius={30}
        />
      </View>
    </SafeAreaView>
  );
};

export default ScrapperTracking;
