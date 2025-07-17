import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
import fonts from '../../utils/fonts';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.backGround,
  },

  scrollWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },

  container: {
    alignItems: 'center',
  },

  logo: {
    width: '50%',
    aspectRatio: 2,
    maxWidth: 250,
    maxHeight: 120,
    marginBottom: 25,
    resizeMode: 'contain',
  },

  textWrapper: {
    alignItems: 'center',
    marginBottom: 15,
  },

  title: {
    fontSize: 24,
    marginBottom: 5,
    color: Colors.title,
    fontFamily: fonts.BOLD,
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.subTitle,
    fontFamily: fonts.REGULAR,
  },

  signUpForm: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },

  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 12,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.black,
    fontFamily: fonts.REGULAR,
  },

  icon: {
    marginRight: 8,
  },

  rightIcon: {
    marginLeft: 8,
  },

  signUpButton: {
    width: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 5,
    marginBottom: 15,
  },

  signUpText: {
    color: Colors.backGround,
    fontSize: 16,
    fontFamily: fonts.BOLD,
  },

  error: {
    color: Colors.red,
    fontSize: 12,
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginLeft: 5,
    fontFamily: fonts.REGULAR,
  },

  bottomTextWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  bottomText: {
    color: Colors.subTitle,
    fontSize: 14,
    fontFamily: fonts.REGULAR,
  },

  login: {
    color: Colors.title,
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: fonts.BOLD,
  },
});
