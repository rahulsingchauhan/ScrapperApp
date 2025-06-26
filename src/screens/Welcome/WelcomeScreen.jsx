import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { styles } from './Styles';
import screenNames from '../../utils/screenName';
import { ImageIndex } from '../../assets/ImageIndex';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const { width, height } = Dimensions.get('window');
const slides = [
  {
    key: '1',
    title: 'Welcome to Scrapapp',
    description:
      'ScrapApp connects people who need to get rid of scrap with scrappers who will pick it up for free.',
    image: ImageIndex.slide1, 
  },
  {
    key: '2',
    title: 'Pick Up Scrap for Free!',
    description:
      'Browse nearby listings, accept pickups, and recycle for a greener world!',
    image: ImageIndex.slide2 ,
  },
];

const WelcomeScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const flatListRef = useRef();

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextIndex = currentSlideIndex + 1;
    if (nextIndex < slides.length) {
      flatListRef.current.scrollToIndex({ index: nextIndex });
    } else {
      // Finish onboarding
      navigation.replace(screenNames.ONBOARDING.CHOOSE_ROLE);
    }
  };

  const skip = () => navigation.replace(screenNames.ONBOARDING.CHOOSE_ROLE);

  const Slide = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={skip} style={styles.skipButton}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        renderItem={({ item }) => <Slide item={item} />}
      />

      <View style={styles.footer}>
        {/* Dots */}
        <View style={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentSlideIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>

        {/* Next Button */}
        {/* <TouchableOpacity style={styles.nextButton} onPress={goToNextSlide}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity> */}

       <PrimaryButton title={"Next"} onPress={goToNextSlide}  />
      </View>
       
    </View>
  );
};

export default WelcomeScreen;
