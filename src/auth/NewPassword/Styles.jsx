import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
import fonts from '../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },

  scrollContent: {
    flexGrow: 1,
  },

  titleView: {
    marginBottom: 40,
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
    fontFamily: fonts.REGULAR,
  },

  icon: {
    marginRight: 10,
  },

  rightIcon: {
    marginLeft: 10,
  },
});
