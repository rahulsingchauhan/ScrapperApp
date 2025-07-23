import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
import fonts from '../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    backgroundColor: 'white',
  },

  scrollContent: {
    flexGrow: 1,
  },

  titleView: {
    paddingHorizontal: 10,
    marginBottom: 40,
    marginTop:20,
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

  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.input,
    borderRadius: 30,
    paddingHorizontal: 25,
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
});
