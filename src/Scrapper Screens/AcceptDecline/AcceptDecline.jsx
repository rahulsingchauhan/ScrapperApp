import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import MapView, {
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
  AnimatedRegion,
} from 'react-native-maps';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { ImageIndex } from '../../assets/ImageIndex';
import { styles } from './Styles';
import Colors from '../../theme/colors';

const AcceptDecline = () => {
  const source = { latitude: 22.7196, longitude: 75.8577 };
  const destination = { latitude: 22.7256, longitude: 75.8627 };

  const routeCoordinates = [
    source,
    { latitude: 22.7216, longitude: 75.859 },
    { latitude: 22.7235, longitude: 75.861 },
    destination,
  ];

  const carPosition = useRef(
    new AnimatedRegion({
      latitude: source.latitude,
      longitude: source.longitude,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    })
  ).current;

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index++;
      if (index >= routeCoordinates.length) {
        clearInterval(interval);
        return;
      }

      const nextCoord = routeCoordinates[index];

      carPosition.timing({
        latitude: nextCoord.latitude,
        longitude: nextCoord.longitude,
        duration: 1000,
        useNativeDriver: false,
      }).start();
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {/* Map */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.absoluteFillObject}
        initialRegion={{
          latitude: source.latitude,
          longitude: source.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* Source Marker */}
        <Marker coordinate={source} title="Pickup Location" />

        {/* Destination Marker */}
        <Marker coordinate={destination} title="Drop Location" />

        {/* Animated Car Marker */}
        <Marker.Animated coordinate={carPosition} image={ImageIndex.car} />

        {/* Route Polyline */}
        <Polyline
          coordinates={routeCoordinates}
          strokeColor={Colors.primary}
          strokeWidth={4}
        />
      </MapView>

      {/* Bottom Info Card */}
      <View style={styles.bottomCard}>
        <Text style={styles.name}>Lindsey Saris</Text>
        <Text style={styles.address}>
          2 New Nehru Nagar Indore 457418, Madhya Pradesh
        </Text>

        <View style={styles.itemRow}>
          <Image source={ImageIndex.metal} style={styles.itemIcon} />
          <View>
            <Text style={styles.itemTitle}>Old Metal Pipes</Text>
            <Text style={styles.itemSubtitle}>Metal Scrap</Text>
          </View>
        </View>
      </View>

      {/* Buttons below the card */}
      <View style={styles.buttonRowBelowCard}>
        <PrimaryButton
          title="Decline"
          onPress={() => {}}
          backgroundColor={Colors.red}
          style={styles.buttonStyle}
        />
        <PrimaryButton
          title="Pickup"
          onPress={() => {}}
          backgroundColor={Colors.primary}
          style={styles.buttonStyle}
        />
      </View>
    </View>
  );
};

export default AcceptDecline;
