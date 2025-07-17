import { StyleSheet } from 'react-native';
import fonts from '../../utils/fonts';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
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
    marginBottom: 25,
    resizeMode: 'contain',
  },

  textWrapper: {
    alignItems: 'center',
    marginBottom: 25,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Poppins-Bold',
  },

  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    color: '#999999',
    fontFamily: 'Poppins-Regular',
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
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    paddingHorizontal: 18,
    height: 60,
    marginBottom: 18,
  },

  input: {
    flex: 1,
    fontSize: 17,
    color: '#000',
    fontFamily: 'Poppins-Regular',
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
    color: '#000',
    fontSize: 15,
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontFamily: 'Poppins-Bold',
  },

  signInButton: {
    width: '100%',
    backgroundColor: '#FB5B2B',
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
    elevation: 5,
    marginBottom: 25,
  },

  signInText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'Poppins-Bold',
  },

  bottomTextWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 15,
  },

  bottomText: {
    color: '#999',
    fontSize: 15,
    marginRight: 4,
    fontFamily: 'Poppins-Regular',
  },

  signup: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },

  orText: {
    fontWeight: 'bold',
    marginVertical: 16,
    fontSize: 17,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },

  googleIcon: {
    width: 30,
    height: 30,
    marginTop: 20,
    resizeMode: 'contain',
  },

  error: {
    color: 'red',
    fontSize: 13,
    alignSelf: 'flex-start',
    marginBottom: 8,
    marginLeft: 8,
    fontFamily: 'Poppins-Regular',
  },
});
