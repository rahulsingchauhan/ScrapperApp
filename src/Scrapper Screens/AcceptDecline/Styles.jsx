import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";
import fonts from "../../utils/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  absoluteFillObject: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomCard: {
    backgroundColor: Colors.backGround,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginTop: 'auto',
    marginBottom: 50,
    elevation: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.BOLD,
    color: Colors.black,
  },
  address: {
    fontSize: 14,
    color: Colors.subTitle,
    fontFamily: fonts.REGULAR,
    marginBottom: 12,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  itemIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 8,
    backgroundColor: Colors.backGround,
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: fonts.BOLD,
  },
  itemSubtitle: {
    fontSize: 13,
    color: Colors.subTitle,
    fontFamily: fonts.REGULAR,
  },
  buttonRowBelowCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 50,
  },
  buttonStyle: {
    width: '47%',
  },
});
