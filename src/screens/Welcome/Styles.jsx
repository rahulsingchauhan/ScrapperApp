import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../theme/colors";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backGround,
  },
  skipButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10,
  },
  skipText: {
    color: Colors.title,
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
    color: Colors.title,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.subTitle,
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
    backgroundColor: Colors.subTitle,
    marginHorizontal: 5,
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: Colors.black,
    width: 16,
  },
  nextButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 140,
    paddingVertical: 12,
    borderRadius: 15,
  },
  nextText: {
    color: Colors.backGround,
    fontWeight: '600',
    fontSize: 16,
  },
});
