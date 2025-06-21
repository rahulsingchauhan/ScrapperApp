import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <>
      {/* ✅ Global StatusBar for all screens */}
      <StatusBar
        barStyle="dark-content"       // or "light-content" based on theme
        backgroundColor="#ffffff"     // Change as per your design
        animated={true}
      />

      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;
