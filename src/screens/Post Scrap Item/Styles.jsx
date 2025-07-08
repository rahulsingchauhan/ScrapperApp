import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
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
  },
  uploadIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  uploadText: {
    fontSize: 16,
    color: '#888',
  },

  inputBox: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
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
    backgroundColor: '#fff',
  },
  dropdownText: {
    fontSize: 16,
    color: '#444',
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
