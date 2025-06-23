import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
      container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  skipButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10,
  },
  skipText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  slide: {
    width,
    alignItems: 'center',
    paddingTop: 120,
    paddingHorizontal: 20,
  },
  image: {
    height: height * 0.4,
    width: width * 0.8,
    marginBottom: 45,
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
    backgroundColor: '#FB5B2B',
    paddingHorizontal: 140,
    paddingVertical: 12,
    borderRadius: 15,
  },
  nextText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
