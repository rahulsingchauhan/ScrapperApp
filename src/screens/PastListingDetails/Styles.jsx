import { StyleSheet } from 'react-native';
import fonts from '../../utils/fonts';
import Colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backGround,
    paddingBottom: 20,
  },

  image: {
    width: '100%',
    height: 270,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },

  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 12,
    paddingTop: 30,
    zIndex: 2,
  },

  headerView: {
    marginBottom: 20,
    
  },

  content: {
    paddingTop: 50,
    paddingHorizontal: 4,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 6,
    fontFamily: fonts.BOLD,
  },

  subtitle: {
    fontSize: 16,
    color: Colors.primary,
    marginBottom: 12,
    fontFamily: fonts.MEDIUM,
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  timeIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
    
  },

  timeText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: fonts.REGULAR,
  },

  scrollContent: {
    flexGrow: 1,
    paddingTop: 280, // leaves space for overlaid image area
  },

  section: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  heading: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 10,
    fontFamily: fonts.BOLD,
  },

  description: {
    fontSize: 10,
    color: Colors.subTitle,
    lineHeight: 22,
    fontFamily: fonts.REGULAR,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  locationIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    tintColor: Colors.primary,
  },

  locationText: {
    fontSize: 12,
    color: Colors.subTitle,
    fontFamily: fonts.REGULAR,
  },

  map: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginTop: 10,
  },

  buttonRow: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
});
