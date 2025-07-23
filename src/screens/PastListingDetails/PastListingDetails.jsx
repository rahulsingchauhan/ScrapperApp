import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import { ImageIndex } from '../../assets/ImageIndex'; 
import { styles } from './Styles';
import MapView, { Marker } from 'react-native-maps';
import Colors from '../../theme/colors';
import CustomHeader from '../../components/Header/CustomHeader ';


const PastListingDetails = ({ route , navigation }) => {
  const { data } = route.params;

  return (
    
    <View style={styles.container}>
     
      <Image source={data.image} style={styles.image} />
      <View style={styles.wrapper}>

        {/* ✅ Custom Header */}
        <View style={styles.headerView}>
          <CustomHeader
            onPress={() => navigation.goBack()}
            Icon={ImageIndex.back}
            backgroundColor='transparent'
          />
        </View>

        {/* ✅ Content View */}
        <View style={styles.content}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.subtitle}>{data.category}</Text>

          <View style={styles.timeRow}>
            <Image source={ImageIndex.clock} style={styles.timeIcon} />
            <Text style={styles.timeText}>{data.time}</Text>
          </View>
        </View>
      </View>

     <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            
          >
            
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
    latitude: 40.785091,     
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

 </ScrollView>
      <View style={styles.buttonRow}>
        <PrimaryButton
          title="Submit"
          backgroundColor={Colors.primary}
          textColor="#fff"
          onPress={() => navigation.goBack()}
        />
    
      </View>
    </View>
  
  );
};

export default PastListingDetails;
