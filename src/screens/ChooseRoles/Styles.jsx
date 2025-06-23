import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
      container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 60,
    marginBottom: 60,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    marginBottom: 30,
    textAlign: 'center',
  },
  illustration: {
    width: 220,
    height: 160,
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
  },
  roleButton: {
    borderWidth: 1,
    borderColor: '#ff5c00',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
});