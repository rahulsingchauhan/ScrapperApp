import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
import fonts from '../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 25,
    backgroundColor: Colors.backGround,
    paddingBottom: 25,
  },

  scrollContent: {
    flexGrow: 1,
  },

  scrapView: {
    paddingBottom: 20,
  },

  uploadBox: {
    alignItems: 'center',
    paddingVertical: 30,
    borderWidth: 1,
    borderColor: Colors.input,
    borderStyle: 'dashed',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: Colors.input,
  },

  uploadIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },

  uploadText: {
    fontSize: 16,
    color: Colors.subTitle,
    fontFamily: fonts.BOLD,
  },

  inputBox: {
    marginBottom: 16,
  },

  inputLabel: {
    fontSize: 14,
    color: Colors.subTitle,
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
    backgroundColor: Colors.input,
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

  dropdownOption: {
    paddingVertical: 14,
    paddingHorizontal: 18,
    backgroundColor: Colors.backGround,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  dropdownOptionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
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

  imageSourceText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },

  imageSourceButton: {
    padding: 12,
    backgroundColor: '#eee',
    borderRadius: 10,
    marginBottom: 10,
  },

  imageSourceButtonLast: {
    padding: 12,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
});
