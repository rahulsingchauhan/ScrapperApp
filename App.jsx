import { StatusBar, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', fontFamily: 'Poppins-Bold'}}>
      <StatusBar
        barStyle="dark-content" 
        backgroundColor='white' 
      />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
