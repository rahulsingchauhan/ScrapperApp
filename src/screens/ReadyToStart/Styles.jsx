import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: Colors.backGround,
  },

  // Logo Section
  logoContainer: {
    alignItems: 'center',
    marginBottom: 100,
  },
  logo: {
    width: 120,
    height: 60,
  },

  // Illustration Section
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  illustration: {
    width: 420,
    height: 220,
    resizeMode: 'contain',
  },

  // Text Section
  textContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.title,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.subTitle,
    marginTop: 6,
  },

  // Buttons Section
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
    marginTop: 120,
  },
  SignUpButton: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
    height: 48,
    backgroundColor: Colors.primary,
  },
  SignInButton: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
    height: 48,
    backgroundColor: Colors.backGround,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.black,
  },
});
