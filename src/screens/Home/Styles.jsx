import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
import fonts from '../../utils/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Colors.backGround,
  },

  titleView: {
    marginBottom: 16,
    paddingTop: 16,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 16,
    color: Colors.subTitle,
    fontFamily: fonts.REGULAR,
  },

  subTitle: {
    fontSize: 24,
    color: Colors.primary,
    fontFamily: fonts.BOLD,
  },

  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 15,
    paddingVertical:15,
    paddingHorizontal:10,
    backgroundColor: '#E5E5E5',
    gap: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
   
  },

  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.backGround,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
   
    marginTop: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: Colors.black,
    fontFamily: fonts.REGULAR,
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: Colors.backGround,
    borderRadius: 20,
    padding: 15,
    marginTop: 16,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },

  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },

  textContainer: {
    flex: 1,
    marginLeft: 15,
  },

  cardTitle: {
    fontSize: 16,
    color: Colors.black,
    fontFamily: fonts.BOLD,
  },

  cardCategory: {
    fontSize: 14,
    color: Colors.primary,
    marginVertical: 4,
    fontFamily: fonts.REGULAR,
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  timeIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
    tintColor: Colors.primary,
  },

  timeText: {
    fontSize: 14,
    color: Colors.black,
    fontFamily: fonts.REGULAR,
  },

  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },

  fabImage: {
  width: 60,
  height: 60,
  resizeMode: 'contain',
  
},
});
