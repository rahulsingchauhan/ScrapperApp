import { StyleSheet } from 'react-native';
import fonts from '../../utils/fonts';
import Colors from '../../theme/colors';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.backGround,
  },

  scrollWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: '7%',
    paddingBottom: 60,
  },

  container: {
    alignItems: 'center',
  },

  logo: {
    width: '50%',
    aspectRatio: 2,
    maxWidth: 250,
    maxHeight: 120,
    marginTop: 20,
    marginBottom: 25,
    resizeMode: 'contain',
  },

  textWrapper: {
    alignItems: 'center',
    marginBottom: 25,
  },

  title: {
    fontSize: 26,
    fontFamily: fonts.BOLD,
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    color: Colors.subTitle,
    fontFamily: fonts.REGULAR,
  },

  loginForm: {
    width: '100%',
    alignItems: 'center',
    marginTop: 25,
  },

  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.input,
    borderRadius: 12,
    paddingHorizontal: 18,
    height: 60,
    marginBottom: 18,
  },

  input: {
    flex: 1,
    fontSize: 17,
    color: Colors.black,
    fontFamily: fonts.REGULAR,
  },

  icon: {
    marginRight: 10,
  },

  rightIcon: {
    marginLeft: 10,
  },

  forgetPasswordButton: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  forgetPasswordText: {
    color: Colors.black,
    fontSize: 15,
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontFamily: fonts.BOLD,
  },

  bottomTextWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 15,
  },

  bottomText: {
    color: Colors.subTitle,
    fontSize: 15,
    marginRight: 4,
    fontFamily: fonts.REGULAR,
  },

  signup: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: fonts.BOLD,
  },

  orText: {
    fontWeight: 'bold',
    marginVertical: 16,
    fontSize: 17,
    color: Colors.black,
    textAlign: 'center',
    fontFamily: fonts.BOLD,
  },

  googleIcon: {
    width: 30,
    height: 30,
    marginTop: 20,
    resizeMode: 'contain',
  },

  error: {
    color: Colors.red,
    fontSize: 13,
    alignSelf: 'flex-start',
    marginBottom: 8,
    marginLeft: 8,
    fontFamily: 'Poppins-Regular',
  },
});
