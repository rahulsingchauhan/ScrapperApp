import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { styles } from './Styles';
import { ImageIndex } from '../../assets/ImageIndex';
import CustomHeader from '../../components/Header/CustomHeader ';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import screenNames from '../../utils/screenName';
import MapView, { Marker } from 'react-native-maps';

const PostScrapItem = ({ navigation }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [selectedAvailability, setSelectedAvailability] = useState(
    'Set Item Availability',
  );

  const categoryOptions = ['Plastic', 'Metal', 'Electronics', 'Glass'];
  const availabilityOptions = ['Available', 'Not Available'];

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader
        onBackPress={() => navigation.goBack()}
        backIcon={ImageIndex.back}
        title="Post Scrap Item"
      />

      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.scrapView}>
            {/* Upload Image */}
            <TouchableOpacity style={styles.uploadBox}>
              <Image source={ImageIndex.upload} style={styles.uploadIcon} />
              <Text style={styles.uploadText}>Upload Image</Text>
            </TouchableOpacity>

            {/* Item Name Input */}
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Item Name</Text>
              <TextInput style={styles.input} placeholder="Enter item name" />
            </View>

            {/* Description Input */}
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Description</Text>
              <TextInput
                style={[
                  styles.input,
                  { height: 120, textAlignVertical: 'top' },
                ]}
                placeholder="Enter description"
                multiline
              />
            </View>

            {/* Category Dropdown */}
            <View style={{ marginBottom: 16 }}>
              <TouchableOpacity
                style={styles.dropdownBox}
                onPress={() => {
                  setIsCategoryOpen(!isCategoryOpen);
                  setIsAvailabilityOpen(false);
                }}
              >
                <Text style={styles.dropdownText}>{selectedCategory}</Text>
                <Image
                  source={ImageIndex.downArrow}
                  style={styles.dropdownIcon}
                />
              </TouchableOpacity>

              {isCategoryOpen &&
                categoryOptions.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      paddingVertical: 10,
                      paddingHorizontal: 12,
                      backgroundColor: '#f0f0f0',
                      borderBottomWidth:
                        index !== categoryOptions.length - 1 ? 1 : 0,
                      borderColor: '#ccc',
                    }}
                    onPress={() => {
                      setSelectedCategory(option);
                      setIsCategoryOpen(false);
                    }}
                  >
                    <Text style={{ fontSize: 16, color: '#444' }}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>

            {/* Location Input */}
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Location</Text>
              <TextInput style={styles.input} placeholder="Enter location" />
            </View>

            {/* Map View */}
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                initialRegion={{
                  latitude: 28.6139,
                  longitude: 77.209,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <Marker
                  coordinate={{ latitude: 28.6139, longitude: 77.209 }}
                  title="Location"
                />
              </MapView>
            </View>

            {/* Availability Dropdown */}
            <View style={{ marginBottom: 16 }}>
              <TouchableOpacity
                style={styles.dropdownBox}
                onPress={() => {
                  setIsAvailabilityOpen(!isAvailabilityOpen);
                  setIsCategoryOpen(false);
                }}
              >
                <Text style={styles.dropdownText}>{selectedAvailability}</Text>
                <Image
                  source={ImageIndex.downArrow}
                  style={styles.dropdownIcon}
                />
              </TouchableOpacity>

              {isAvailabilityOpen &&
                availabilityOptions.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      paddingVertical: 10,
                      paddingHorizontal: 12,
                      backgroundColor: '#f0f0f0',
                      borderBottomWidth:
                        index !== availabilityOptions.length - 1 ? 1 : 0,
                      borderColor: '#ccc',
                    }}
                    onPress={() => {
                      setSelectedAvailability(option);
                      setIsAvailabilityOpen(false);
                    }}
                  >
                    <Text style={{ fontSize: 16, color: '#444' }}>
                      {option}
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>
          </View>
        </ScrollView>

        <PrimaryButton
          title="Submit"
          onPress={() => navigation.navigate(screenNames.APP.HOMESCREEN)}
        />
      </View>
    </View>
  );
};

export default PostScrapItem;
