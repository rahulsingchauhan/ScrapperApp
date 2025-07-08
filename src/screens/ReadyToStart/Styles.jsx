import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../theme/colors';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: height * 0.04, // ~80px
    paddingHorizontal: width * 0.05, // ~20px
    backgroundColor: Colors.backGround,
  },

  // Logo Section
  logoContainer: {
    alignItems: 'center',
    marginBottom: height * 0.12, // ~100px
  },
  logo: {
    width: width * 0.3, // ~120px
    height: height * 0.075, // ~60px
    resizeMode: 'contain',
  },

  // Illustration Section
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: height * 0.035, // ~30px
  },
  illustration: {
    width: width * 0.9, // ~420px
    height: height * 0.25, // ~220px
    resizeMode: 'contain',
  },

  // Text Section
  textContainer: {
    alignItems: 'center',
    marginTop: height * 0.07, // ~60px
  },
  title: {
    fontSize: width * 0.06, // ~24px
    fontWeight: '700',
    color: Colors.title,
  },
  subtitle: {
    fontSize: width * 0.045, // ~18px
    textAlign: 'center',
    color: Colors.subTitle,
    marginTop: height * 0.007, // ~6px
  },

  // Buttons Section
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: width * 0.012, // ~5px
    marginTop: height * 0.14, // ~120px
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05, // ~20px
    marginTop: height * 0.025, // ~20px
  },
});
