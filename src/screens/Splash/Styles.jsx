import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
      container: {
    flex: 1,
    backgroundColor: '#ffffff', // Background of splash screen
    alignItems: 'center',
    justifyContent: 'center',
  },
    logo: {
    width: 74,
    height: 92,
    position: 'absolute',
  },
});
