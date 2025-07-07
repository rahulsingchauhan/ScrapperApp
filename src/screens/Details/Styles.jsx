import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 220,
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
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
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
  },
  mapImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 12,
    backgroundColor: '#eee',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 100,
    paddingHorizontal: 20,
  },
  map: {
  width: '100%',
  height: 150,
  borderRadius: 12,
  marginTop: 10,
},

});
