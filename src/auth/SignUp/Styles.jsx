import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.backGround,
  },

  scrollWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20, // Ensures padding is consistent across screen widths
    paddingBottom: 40,     // Adds space for bottom content on smaller screens
  },

  container: {
    alignItems: 'center', // Centers child elements horizontally
  },

  logo: {
    width: '50%',          // Takes up 50% of screen width for responsiveness
    aspectRatio: 2,        // Maintains width/height ratio
    maxWidth: 250,         // Prevents logo from getting too large on tablets
    maxHeight: 120,        // Prevents distortion in landscape mode
    marginBottom: 25,
    resizeMode: 'contain', // Keeps aspect ratio intact
  },

  textWrapper: {
    alignItems: 'center',  // Centers title/subtitle horizontally
    marginBottom: 15,
  },

  title: {
    fontSize: 24,          // Large readable heading
    fontWeight: '700',
    marginBottom: 5,
    color: Colors.title,
  },

  subtitle: {
    fontSize: 16,          // Subheading with readable size
    textAlign: 'center',
    color: Colors.subTitle,
  },

  signUpForm: {
    width: '100%',         // Takes full width to ensure responsiveness
    alignItems: 'center',
    marginTop: 15,
  },

  inputWrapper: {
    width: '100%',         // Makes inputs responsive to screen width
    flexDirection: 'row',  // Icon + input field inline
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 12,
  },

  input: {
    flex: 1,               // Expands to fill available space beside icon
    fontSize: 16,
    color: Colors.black,
  },

  icon: {
    marginRight: 8,        // Space between icon and input
  },

  rightIcon: {
    marginLeft: 8,         // Space between input and eye icon
  },

  signUpButton: {
    width: '100%',         // Full width button for tap-friendly UI
    backgroundColor: Colors.primary,
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 5,
    marginBottom: 15,
  },

  signUpText: {
    color: Colors.backGround,
    fontWeight: 'bold',
    fontSize: 16,
  },

  error: {
    color: Colors.red,
    fontSize: 12,
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginLeft: 5,
  },

  bottomTextWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',      // Ensures text wraps on smaller screens
    justifyContent: 'center',
  },

  bottomText: {
    color: Colors.subTitle,
    fontSize: 14,
  },

  login: {
    color: Colors.title,
    fontWeight: 'bold',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
