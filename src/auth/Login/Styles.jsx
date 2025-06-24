import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollWrapper: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: '7%', // Increased spacing
    paddingBottom: 60,       // Was 40
  },
  container: {
    alignItems: 'center',
  },
  logo: {
    width: '50%',
    height: undefined,
    aspectRatio: 2,
    marginBottom: 25, // Was 15
    resizeMode: 'contain',
  },
  textWrapper: {
    alignItems: 'center',
    marginBottom: 25, // Was 15
  },
  title: {
    fontSize: 26,     // Slightly bigger
    fontWeight: '700',
    marginBottom: 10, // Was 5
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 17, // Slightly bigger
    textAlign: 'center',
    color: '#999999',
  },
  loginForm: {
    width: '100%',
    alignItems: 'center',
    marginTop: 25, // Was 15
  },
  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    paddingHorizontal: 18, // Slight increase
    height: 60,             // Was 55
    marginBottom: 18,       // Was 12
  },
  input: {
    flex: 1,
    fontSize: 17,  // Slightly bigger
    color: '#000',
  },
  icon: {
    marginRight: 10, // Was 8
  },
  rightIcon: {
    marginLeft: 10, // Was 8
  },
  forgetPasswordButton: {
    alignItems: 'center',
    marginTop: 10,     // Was 5
    marginBottom: 20,  // Was 15
  },
  forgetPasswordText: {
    color: '#000',
    fontSize: 15, // Was 14
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  signInButton: {
    width: '100%',
    backgroundColor: '#FB5B2B',
    borderRadius: 18,      // Was 15
    paddingVertical: 18,   // Was 15
    alignItems: 'center',
    elevation: 5,
    marginBottom: 25,      // Was 15
  },
  signInText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  bottomTextWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 15, // Added spacing
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
  googleIcon: {
    width: 30,   // Was 25
    height: 30,  // Was 25
    marginTop: 20, // Was 15
    resizeMode: 'contain',
  },
  orText: {
    fontWeight: 'bold',
    marginVertical: 16,  // Was 10
    fontSize: 17,
    color: '#333',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    fontSize: 13,       // Was 12
    alignSelf: 'flex-start',
    marginBottom: 8,    // Was 5
    marginLeft: 8,      // Was 5
  },
});
