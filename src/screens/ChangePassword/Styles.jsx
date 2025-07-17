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


  formContainer: {
    gap: 20,
    
  },

  inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF5F4',
    borderRadius: 40,
    paddingHorizontal: 18,
    height: 60,
  },

  input: {
    flex: 1,
    fontSize: 17,
    color: '#000000',
    paddingVertical: 10,
  },

  icon: {
    marginRight: 10,
  },

  rightIcon: {
    marginLeft: 10,
  },

  errorText: {
    color: 'red',
    fontSize: 13,
    marginTop: -12,
    marginBottom: 8,
    marginLeft: 5,
  },
});
