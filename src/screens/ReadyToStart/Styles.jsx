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
  logo: {
    width: 120,
    height: 60,
    marginBottom: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 6,
    color: Colors.title,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
    color: Colors.subTitle,
  },
  illustration: {
    width: 220,
    height: 160,
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
    paddingTop: 30,
  },
  SignUpButton: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
    height: '40%',
    backgroundColor: Colors.primary,
  },
  SignInButton: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
    height: '40%',
    backgroundColor: Colors.backGround,

  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: Colors.black, 
  },
});
