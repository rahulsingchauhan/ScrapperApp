import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scrollWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: '7%', // Padding as % keeps layout fluid on all widths
    paddingBottom: 60,       // Leaves room for buttons on smaller screens
  },

  container: {
    alignItems: 'center',
  },

logo: {
  width: '50%',           // Keeps it responsive
  aspectRatio: 2,         // Maintains shape
  maxWidth: 250,          // Prevents it from becoming too wide in landscape
  maxHeight: 120,         // Prevents it from becoming too tall
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
    marginBottom: 10,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    color: '#999999',
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
    fontWeight: '500',
    textDecorationLine: 'underline',
  },

  signInButton: {
    width: '100%',
    backgroundColor: '#FB5B2B',
    borderRadius: 18,
    paddingVertical: 18,      // Increases height while keeping responsiveness
    alignItems: 'center',
    elevation: 5,
    marginBottom: 25,
  },

  signInText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },

  bottomTextWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',         // Ensures text wraps on small screens
    justifyContent: 'center',
    marginTop: 15,
  },

  bottomText: {
    color: '#999',
    fontSize: 15,
    marginRight: 4,
  },

  signup: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'underline',
  },

  orText: {
    fontWeight: 'bold',
    marginVertical: 16,
    fontSize: 17,
    color: '#333',
    textAlign: 'center',
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
  },
});
