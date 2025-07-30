import { useState } from 'react';
import ImagePicker from 'react-native-image-crop-picker';

const usePostScrap = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const [selectedAvailability, setSelectedAvailability] = useState(
    'Set Item Availability',
  );
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

  return {
    handleOpenGallery,
    handleOpenCamera,
    isCategoryOpen,
    setIsCategoryOpen,
    isAvailabilityOpen,
    selectedCategory,
    setSelectedCategory,
    setIsAvailabilityOpen,
    selectedAvailability,
    setSelectedAvailability,
    imageModalVisible,
    setImageModalVisible,
    categoryOptions,
    availabilityOptions,
  };
};

export default usePostScrap;
