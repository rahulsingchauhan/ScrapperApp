import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  illustrator: {
    alignItems: 'center',
    marginVertical: 20,
  },
  illustrationImage: {
    width: width * 0.8,
    height: 250,
  },
  textContainer: {
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  subText: {
    fontSize: 15,
    color: '#666',
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 14,
    color: '#444',
    marginBottom: 12,
    lineHeight: 22,
  },
});
