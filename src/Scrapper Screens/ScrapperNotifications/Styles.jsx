import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
import fonts from '../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: Colors.backGround,
  },
  SideText:{
paddingVertical:25,

  },
  Heading:{
fontSize:18,
fontWeight:600,
fontFamily: fonts.BOLD
  },
  notification: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconWrapper: {
    marginRight: 12,
      justifyContent: 'center',
    alignItems: 'center',
  },


  bellImage: {
  width: 50,
  height: 50,
},

  content: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
    fontFamily: fonts.BOLD
  },
  message: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
       fontFamily: fonts.REGULAR
  },
  link: {
    color: Colors.primary,
       fontSize: 14,
    marginTop: 4,
    fontWeight: '500',
      fontFamily: fonts.BOLD
  },
  time: {
    fontSize: 12,
    color: Colors.subTitle,
    marginTop: 4,
    fontFamily: fonts.REGULAR
  },
});