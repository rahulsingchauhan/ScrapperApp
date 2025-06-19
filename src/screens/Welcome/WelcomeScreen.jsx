import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'Welcome to Scrapapp',
    description: 'ScrapApp connects people who need to get rid of scrap with scrappers who will pick it up for free.',
    image: require('../../assets/images/slide1.png'), // 📌 Add your image path
  },
  {
    key: '2',
    title: 'Pick Up Scrap for Free!',
    description: 'Browse nearby listings, accept pickups, and recycle for a greener world!',
    image: require('../../assets/images/slide2.png'), // 📌 Add your image path
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
      navigation.replace('MainDrawer');
    }
  };

  const skip = () => navigation.replace('MainDrawer');

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
        <TouchableOpacity style={styles.nextButton} onPress={goToNextSlide}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
  },
  skipText: {
    color: '#666',
    fontSize: 16,
  },
  slide: {
    width,
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  image: {
    height: height * 0.4,
    width: width * 0.8,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
  },
  footer: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  dot: {
    height: 8,
    width: 8,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: '#FF5722',
    width: 16,
  },
  nextButton: {
    backgroundColor: '#FF5722',
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 25,
  },
  nextText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
