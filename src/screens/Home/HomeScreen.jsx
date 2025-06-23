import React from 'react';
import { View, Text, Button} from 'react-native';
import { styles } from './Styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏠 Welcome to Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};



export default HomeScreen;
