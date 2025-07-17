import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../theme/colors";
import fonts from '../../utils/fonts';

// Get screen dimensions
const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: height * 0.10,
    paddingHorizontal: width * 0.05,
    backgroundColor: Colors.backGround,
  },

  logo: {
    width: width * 0.3,
    height: height * 0.12,
    marginBottom: height * 0.07,
  },

  title: {
    fontSize: width * 0.045,
    marginBottom: height * 0.01,
    color: Colors.title,
    fontFamily: fonts.BOLD,
  },

  subtitle: {
    fontSize: width * 0.033,
    marginBottom: height * 0.03,
    textAlign: 'center',
    color: Colors.black,
    fontFamily: fonts.REGULAR,
  },

  illustration: {
    width: '100%',
    height: height * 0.3,
    marginBottom: height * 0.04,
    resizeMode: 'contain',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 10,
    paddingHorizontal: width * 0.01,
  },

  roleButton: {
    flex: 0.48,
    borderWidth: width * 0.005,
    borderColor: Colors.primary,
    paddingVertical: height * 0.012,
    borderRadius: width * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backGround,
  },

  roleIcon: {
    width: width * 0.2,
    height: width * 0.2,
    marginBottom: height * 0.01,
  },

  buttonText: {
    fontSize: width * 0.035,
    marginTop: height * 0.005,
    color: Colors.title,
    fontFamily: fonts.BOLD,
  },

  textWrapper: {
    marginTop: height * 0.025,
    alignItems: 'center',
  },
});
