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

 
  titleView: {
    marginBottom: 40,
    gap: 8, 
  },

  
  title: {
    fontWeight: '700',
    fontSize: 24, 
    color: Colors.black,
  },

  
  subTitle: {
    color: Colors.subTitle,
    fontSize: 16,
  },
inputWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    paddingHorizontal: 18,
  
    height: 60,
    marginBottom: 18,
    
  },

  input: {
    flex: 1,
    fontSize: 17,
    color: '#000',
  },

  icon: {
    marginRight: 10,
  },

  rightIcon: {
    marginLeft: 10,
  },

  
});
