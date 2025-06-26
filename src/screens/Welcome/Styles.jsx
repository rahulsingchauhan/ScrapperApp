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
    paddingTop: height * 0.12, // ✅ pushed content slightly lower responsively
    paddingHorizontal: 20,
  },
  image: {
    height: height * 0.4,
    width: width * 0.8,
    marginBottom: 50,
   
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
    color: Colors.black,
    lineHeight: 22,

  },
  footer: {
    paddingHorizontal: 16,
    paddingTop: 20, // ✅ corrected typo and added spacing
    paddingBottom: 10, // ✅ added to push the button down
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
    marginBottom: 60, // ✅ reduced to lift the dots a bit
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: Colors.black,
    width: 16,
  },
 
});
