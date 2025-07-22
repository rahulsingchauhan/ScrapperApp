import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../theme/colors';
import fonts from '../../utils/fonts';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: Colors.backGround,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },

  imageView: {
    alignItems: 'center',
  },

  helpImage: {
    width: width * 0.8,
    height: 350,
  },

  inputView: {
    borderWidth: 1.5,
    borderColor: Colors.primary,
    borderRadius: 12,
    padding: 20,
    backgroundColor: Colors.backGround,
  },

  label: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontFamily: fonts.BOLD,
    fontSize: 16,
  },

  textInput: {
    fontSize: 15,
    fontFamily: fonts.REGULAR,
    color: Colors.black,
    minHeight: 100,
  },
});
