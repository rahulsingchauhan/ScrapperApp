import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

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
    width: 140,
    height: 70,
    marginBottom: 15,
  },
  textWrapper: {
    alignItems: 'center',
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 5,
    color: Colors.title,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.subTitle,
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
    backgroundColor: '#F2F2F2', // No value in constants for this light gray, so keeping as is
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.black,
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
    flexWrap: 'wrap',
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
