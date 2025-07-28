import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../theme/colors';
import fonts from '../../utils/fonts';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: height * 0.04,
    paddingHorizontal: width * 0.05,
    backgroundColor: Colors.backGround,
  },

  // Logo Section
  logoContainer: {
    alignItems: 'center',
    marginBottom: height * 0.05,
  },
  logo: {
    width: width * 0.3,
    height: height * 0.12,
    marginBottom: height * 0.07,
  },

  // Illustration Section
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: height * 0.035,
  },
  illustration: {
    width: width * 0.9,
    height: height * 0.25,
    resizeMode: 'contain',
  },

  // Text Section
  textContainer: {
    alignItems: 'center',
    marginTop: height * 0.07,
  },
  title: {
    fontSize: width * 0.06,
    color: Colors.title,
    fontFamily: fonts.BOLD,
  },
  subtitle: {
    fontSize: width * 0.045,
    textAlign: 'center',
    color: Colors.subTitle,
    marginTop: height * 0.007,
    fontFamily: fonts.REGULAR,
  },

  // Buttons Section
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: width * 0.012,
    marginTop: height * 0.08,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
    marginTop: height * 0.025,
  },
});
