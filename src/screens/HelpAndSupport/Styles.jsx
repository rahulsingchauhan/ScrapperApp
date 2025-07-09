import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../theme/colors';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  imageView: {
    alignItems: 'center', },
  helpImage: {
    width: width * 0.8,
    height: 350,
 
  },
  inputView: {
    borderWidth: 1.5,
    borderColor: '#f15b41',
    borderRadius: 12,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    color: '#f15b41',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInput: {
    fontSize: 15,
    color: '#000',
    minHeight: 100,
  },
});
