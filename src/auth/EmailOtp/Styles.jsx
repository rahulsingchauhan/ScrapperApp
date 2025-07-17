import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
import fonts from '../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 25,
    backgroundColor: 'white',
    paddingBottom: 25,
  },

  scrollContent: {
    flexGrow: 1,
  },

  titleView: {
    marginBottom: 16,
    paddingHorizontal: 12,
    gap: 8,
  },

  title: {
    fontSize: 24,
    color: Colors.black,
    fontFamily: fonts.BOLD,
  },

  subTitle: {
    color: Colors.subTitle,
    fontSize: 16,
    fontFamily: fonts.REGULAR,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 24,
    marginBottom: 32,
  },

  otpInput: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.border || '#ccc',
    textAlign: 'center',
    fontSize: 24,
    color: Colors.black,
    backgroundColor: '#fff',
    fontFamily: fonts.MEDIUM,
  },
});
