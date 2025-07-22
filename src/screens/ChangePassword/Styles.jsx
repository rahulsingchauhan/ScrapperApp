import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
import fonts from '../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.backGround,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },

  formContainer: {
    gap: 20,
    
  },

  inputWrapper: {
  marginTop:15,
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
    color: Colors.black,
    paddingVertical: 10,
    fontFamily: fonts.REGULAR,
    
    
  },

  icon: {
    color: Colors.primary,
    marginRight: 10,
  },

  rightIcon: {
    marginLeft: 10,
    
  },

  errorText: {
    color: Colors.red,
    fontSize: 13,
    marginTop: -12,
    marginBottom: 8,
    marginLeft: 5,
    fontFamily: fonts.REGULAR,
  },
});
