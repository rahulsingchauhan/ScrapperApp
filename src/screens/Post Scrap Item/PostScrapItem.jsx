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

import PrimaryButton from '../../components/Buttons/PrimaryButton';
import screenNames from '../../utils/screenName';
import MapView, { Marker } from 'react-native-maps';
import BottomSheetModal from '../../components/Modal/BottomSheetModal';
import ImagePicker from 'react-native-image-crop-picker';
import CustomHeader from '../../components/Header/CustomHeader ';

const PostScrapItem = ({ navigation }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [selectedAvailability, setSelectedAvailability] = useState('Set Item Availability');
  const [imageModalVisible, setImageModalVisible] = useState(false);

  const categoryOptions = ['Plastic', 'Metal', 'Electronics', 'Glass'];
  const availabilityOptions = ['Available', 'Not Available'];

  const handleOpenCamera = async () => {
    try {
      setImageModalVisible(false);
      setTimeout(async () => {
        const image = await ImagePicker.openCamera({
          width: 300,
          height: 400,
          cropping: true,
          mediaType: 'photo',
        });
        console.log('Camera Image:', image);
      }, 300);
    } catch (err) {
      console.warn('Camera cancelled or error:', err.message || err);
    }
  };

  const handleOpenGallery = async () => {
    try {
      setImageModalVisible(false);
      setTimeout(async () => {
        const image = await ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
          mediaType: 'photo',
        });
        console.log('Gallery Image:', image);
      }, 300);
    } catch (err) {
      console.warn('Gallery cancelled or error:', err.message || err);
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        onPress={() => navigation.goBack()}
        Icon={ImageIndex.back}
        title="Post Scrap Item"
      />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.scrapView}>
          {/* Upload Image */}
          <TouchableOpacity style={styles.uploadBox} onPress={() => setImageModalVisible(true)}>
            <Image source={ImageIndex.upload} style={styles.uploadIcon} />
            <Text style={styles.uploadText}>Upload Image</Text>
          </TouchableOpacity>

          {/* Item Name Input */}
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Item Name</Text>
            <TextInput style={styles.input} placeholder="Enter item name" />
          </View>

          {/* Description */}
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Description</Text>
            <TextInput
              style={[styles.input, { height: 120, textAlignVertical: 'top' }]}
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
              <Image source={ImageIndex.downArrow} style={styles.dropdownIcon} />
            </TouchableOpacity>

            {isCategoryOpen &&
              categoryOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    paddingVertical: 14,
                    paddingHorizontal: 18,
                    backgroundColor: '#ffffff',
                    borderBottomWidth: index !== categoryOptions.length - 1 ? 1 : 0,
                    borderColor: '#eee',
                    borderRadius: index === 0 ? 12 : index === categoryOptions.length - 1 ? 12 : 0,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.05,
                    shadowRadius: 4,
                    elevation: 2,
                    marginBottom: index !== categoryOptions.length - 1 ? 10 : 0,
                  }}
                  onPress={() => {
                    setSelectedCategory(option);
                    setIsCategoryOpen(false);
                  }}
                >
                  <Text style={{ fontSize: 16, color: '#333', fontWeight: '500' }}>{option}</Text>
                </TouchableOpacity>
              ))}
          </View>

          {/* Location */}
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Location</Text>
            <TextInput style={styles.input} placeholder="Enter location" />
          </View>

          {/* Map */}
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
              <Marker coordinate={{ latitude: 28.6139, longitude: 77.209 }} title="Location" />
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
              <Image source={ImageIndex.downArrow} style={styles.dropdownIcon} />
            </TouchableOpacity>

            {isAvailabilityOpen &&
              availabilityOptions.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    paddingVertical: 14,
                    paddingHorizontal: 18,
                    backgroundColor: '#ffffff',
                    borderBottomWidth: index !== availabilityOptions.length - 1 ? 1 : 0,
                    borderColor: '#eee',
                    borderRadius: index === 0 ? 12 : index === availabilityOptions.length - 1 ? 12 : 0,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.05,
                    shadowRadius: 4,
                    elevation: 2,
                    marginBottom: index !== availabilityOptions.length - 1 ? 10 : 0,
                  }}
                  onPress={() => {
                    setSelectedAvailability(option);
                    setIsAvailabilityOpen(false);
                  }}
                >
                  <Text style={{ fontSize: 16, color: '#333', fontWeight: '500' }}>{option}</Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>
      </ScrollView>

      {/* Submit Button */}
      <PrimaryButton title="Submit" onPress={() => navigation.navigate(screenNames.APP.HOMESCREEN)} />

      {/* BottomSheetModal for Image Source */}
      <BottomSheetModal visible={imageModalVisible} onClose={() => setImageModalVisible(false)}>
        <Text style={{ fontSize: 18, marginBottom: 20, textAlign: 'center' }}>Select Image Source</Text>

        <TouchableOpacity
          style={{ padding: 12, backgroundColor: '#eee', borderRadius: 10, marginBottom: 10 }}
          onPress={handleOpenCamera}
        >
          <Text style={{ fontSize: 16 }}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ padding: 12, backgroundColor: '#eee', borderRadius: 10 }}
          onPress={handleOpenGallery}
        >
          <Text style={{ fontSize: 16 }}>Gallery</Text>
        </TouchableOpacity>
      </BottomSheetModal>
    </View>
  );
};

export default PostScrapItem;
