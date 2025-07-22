import { StyleSheet } from 'react-native';
import fonts from '../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    color: '#000',
    marginBottom: 10,
    fontFamily: fonts.BOLD,
  },

  description: {
    fontSize: 15,
    color: '#555',
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
    tintColor: '#F36A3E',
  },

  locationText: {
    fontSize: 15,
    color: '#222',
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
