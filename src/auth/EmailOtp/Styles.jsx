import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor:'white',
  },
  scrollContent: {
    flexGrow: 1,
  },
  titleView: {
    marginBottom: 16,
    paddingHorizontal: 16,
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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 32,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.border || '#ccc',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    backgroundColor: '#fff',
  },
  
});
