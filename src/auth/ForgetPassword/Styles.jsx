import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
import fonts from '../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 25,
    backgroundColor: Colors.backGround,
    paddingBottom: 25,
  },

  scrollContent: {
    flexGrow: 1,
  },

  titleView: {
    marginBottom: 16,
    gap: 10,
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

  infoRow: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 24,
    backgroundColor: Colors.backGround,
  },

  icon: {
    width: 50,
    height: 50,
    marginRight: 12,
  },

  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    flexShrink: 1,
  },

  emailTitle: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: fonts.BOLD,
  },

  emailSubTitle: {
    fontSize: 14,
    color: Colors.subTitle,
    fontFamily: fonts.REGULAR,
  },
});
