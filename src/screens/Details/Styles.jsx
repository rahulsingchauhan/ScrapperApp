import { StyleSheet } from 'react-native';
import fonts from '../../utils/fonts';
import Colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backGround,
    paddingBottom: 20,
  },

  image: {
    width: '100%',
    height: 270,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  section: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  heading: {
    fontSize: 18,
    color: Colors.black,
    marginBottom: 10,
    fontFamily: fonts.BOLD,
  },

  description: {
    fontSize: 15,
    color: Colors.subTitle,
    lineHeight: 22,
    fontFamily: fonts.REGULAR,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  locationIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    tintColor: Colors.primary,
  },

  locationText: {
    fontSize: 15,
    color: Colors.subTitle,
    fontFamily: fonts.REGULAR,
  },

  mapImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 12,
    backgroundColor: '#eee',
    
  },

  map: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    marginTop: 10,
    
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
    paddingHorizontal: 20,
  },
});
