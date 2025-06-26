import { StyleSheet } from "react-native";
import Colors from "../../theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: Colors.backGround,
  },
  logo: {
    width: 120,
    height: 100,
    marginBottom: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
    color: Colors.title,
  },
  subtitle: {
    fontSize: 13,
    marginBottom: 30,
    textAlign: 'center',
    color: Colors.black,
  },
  illustration: {
    width: '100%',
    height: '40%',
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
  },
  roleButton: {
    borderWidth: 2,
    borderColor: Colors.primary,
    paddingVertical: 10,
    
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    backgroundColor: Colors.backGround,
  },
  roleIcon: {
  width: 76,
  height: 76,
  marginBottom: 5,
},

  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: Colors.title,
  },
  textWrapper: {
  marginTop: 20, // adjust this value as needed
  alignItems: 'center',
},

});
