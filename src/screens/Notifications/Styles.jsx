import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#FFFFFF',
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },

switchWrapper: {
  marginTop: 20,
  gap: 20,
},

switchRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 12,
  borderBottomWidth: 0.5,
  borderBottomColor: '#e0e0e0',
},

label: {
  fontSize: 16,
  fontWeight: '900',
  color: '#FF5722',
},

});
