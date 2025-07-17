import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import fonts from '../../utils/fonts';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backGround,
  },

  skipButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 10,
  },

  skipText: {
    color: Colors.title,
    fontSize: 16,
    fontFamily: fonts.BOLD,
  },

  slide: {
    width,
    alignItems: 'center',
    paddingTop: height * 0.12,
    paddingHorizontal: 20,
  },

  image: {
    height: height * 0.4,
    width: width * 0.8,
    marginBottom: 50,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
    color: Colors.title,
    fontFamily: fonts.BOLD,
  },

  description: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.black,
    lineHeight: 22,
    fontFamily: fonts.REGULAR,
  },

  footer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  indicatorContainer: {
    flexDirection: 'row',
  },

  dot: {
    height: 8,
    width: 8,
    backgroundColor: Colors.subTitle,
    marginHorizontal: 5,
    marginBottom: 60,
    borderRadius: 4,
  },

  activeDot: {
    backgroundColor: Colors.black,
    width: 16,
  },
});
