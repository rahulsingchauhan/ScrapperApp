import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../theme/colors';
import fonts from '../../utils/fonts';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
    paddingHorizontal: 16,
    backgroundColor: Colors.backGround,
  },
  illustrator: {
    alignItems: 'center',
    marginVertical: 20,
  },
  illustrationImage: {
    width: width * 0.8,
    height: 250,
  },
  textContainer: {
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 22,
    marginBottom: 8,
    color: Colors.black,
    fontFamily: fonts.BOLD
  },
  subText: {
    fontSize: 15,
    color: Colors.subTitle,
    marginBottom: 16,
    fontFamily: fonts.REGULAR
  },
  paragraph: {
    fontSize: 14,
     color: Colors.subTitle,
    marginBottom: 12,
    lineHeight: 22,
       fontFamily: fonts.REGULAR
  },
});
