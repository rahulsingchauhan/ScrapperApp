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
  card: {
    backgroundColor: Colors.backGround,
    borderRadius: 14,
    padding: 16,
    margin: 16,
    elevation: 4, // for Android shadow
    shadowColor: Colors.black, // for iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    marginTop:'120%'
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 36,
    height: 36,
    marginRight: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
     fontFamily: fonts.BOLD
  },
  subtitle: {
    fontSize: 12,
    color: Colors.subTitle,
     fontFamily: fonts.REGULAR
  },
  progressBar: {
    height: 4,
    backgroundColor: Colors.input,
    borderRadius: 2,
    position: 'relative',
    marginVertical: 14,
    marginHorizontal: 2,
  },
  progress: {
    width: '50%',
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 2,
  },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: Colors.backGround,
    borderColor: Colors.primary,
    borderWidth: 2,
    borderRadius: 5,
    position: 'absolute',
    right: 0,
    top: -3,
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  fromText: {
    color: Colors.black,
    fontSize: 12,
     fontFamily: fonts.REGULAR
  },
  toText: {
    color: Colors.black,
    fontSize: 12,
    textAlign: 'right',
     fontFamily: fonts.REGULAR
  },
  cityText: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: fonts.REGULAR
  },
  buttonView:{
    paddingVertical:20,
    paddingHorizontal:18,
   
 }


    });