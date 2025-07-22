import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
import fonts from '../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 25,
    backgroundColor: 'white',
    paddingBottom: 25,
  },

  scrollContent: {
    flexGrow: 1,
  },

  uploadBox: {
    alignItems: 'center',
    paddingVertical: 30,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: Colors.input
  },

  uploadIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },

  uploadText: {
    fontSize: 16,
    color: '#888',
    fontFamily: fonts.REGULAR,
  },

  inputBox: {
    marginBottom: 16,
 
  },

  inputLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
    fontFamily: fonts.REGULAR,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: Colors.input,
    fontFamily: fonts.REGULAR,
  },

  dropdownBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
        backgroundColor: Colors.input
  },

  dropdownText: {
    fontSize: 16,
    color: '#444',
    fontFamily: fonts.REGULAR,
  },

  dropdownIcon: {
    width: 16,
    height: 16,
    tintColor: '#888',
  },

  mapContainer: {
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
  },

  map: {
    flex: 1,
  },
});
