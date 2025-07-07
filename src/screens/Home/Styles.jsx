import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
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
  },

  subTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.primary,
  },

  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    padding: 12,
    borderRadius: 15,
    backgroundColor: '#fff',
    gap: 15,
  },

  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
    marginHorizontal: 16,
    marginTop: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
  },

  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },

  // 🔽 Card Styles Below
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    marginTop: 16,
    marginHorizontal: 16,
    shadowColor: '#000',
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
    fontWeight: 'bold',
    color: '#000',
  },

  cardCategory: {
    fontSize: 14,
    color: '#F36A3E',
    marginVertical: 4,
  },

  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  timeIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
    tintColor: '#F36A3E',
  },

  timeText: {
    fontSize: 14,
    color: '#000',
  },
  fab: {
  position: 'absolute',
  bottom: 30,
  right: 20,
  width: 80,
  height: 80,
  borderRadius: 40,
  backgroundColor: Colors.primary,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 5,
},

fabIcon: {
  fontSize: 50,
  color: '#fff',
  
},

});
