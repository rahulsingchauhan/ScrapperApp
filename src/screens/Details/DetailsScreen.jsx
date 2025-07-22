import React from 'react';
import { View, Text, Image } from 'react-native';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { ImageIndex } from '../../assets/ImageIndex'; 
import { styles } from './Styles';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../theme/colors';

const DetailsScreen = ({ route , navigation }) => {
  const { data } = route.params;

  return (
    
    <View style={styles.container}>
      {/* Product Image */}
      <Image source={data.image} style={styles.image} />

      {/* Description */}
      <View style={styles.section}>
        <Text style={styles.heading}>Description</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Condimentum id elit sed et ipsum ut porttitor risus. Est ornare commodo. 
          Dui lorem magna amet felis vitae lacus. Tristique aenean purus et sem. Risus et tempor vel sodales facilisi. 
          Porta amet lorem blandit tristique vel integer hac. Tris nunc non ornare id.
        </Text>
      </View>

      
      <View style={styles.section}>
        <Text style={styles.heading}>Location</Text>
        <View style={styles.locationRow}>
          <Image source={ImageIndex.location} style={styles.locationIcon} />
          <Text style={styles.locationText}>Grand Park, New York</Text>
        </View>
        
      </View>
<MapView
  style={styles.map}
  initialRegion={{
    latitude: 40.785091,       // Grand Park NY (sample)
    longitude: -73.968285,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
}}
>
  <Marker
    coordinate={{ latitude: 40.785091, longitude: -73.968285 }}
    title="Grand Park"
    description="New York"
  >
          <Image source={ImageIndex.location}   style={{ width: 40, height: 40 }}  />

    </Marker>
</MapView>
      {/* Action Buttons */}
      <View style={styles.buttonRow}>
        <PrimaryButton
          title="Decline"
          backgroundColor={Colors.red}
          width="45%"
          textColor="#fff"
          onPress={() => navigation.goBack()}
        />
        <PrimaryButton
          title="Accept"
          backgroundColor={Colors.green}
          width="45%"
          textColor="#fff"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  
  );
};

export default DetailsScreen;
