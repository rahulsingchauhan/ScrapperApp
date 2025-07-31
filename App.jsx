import { StatusBar, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import VideoPage from './TestScreens/VideoPage';


const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', fontFamily: 'Poppins-Bold'}}>
      <StatusBar
        barStyle="dark-content" 
        backgroundColor='white' 
      />
      {/* <NavigationContainer>
        <StackNavigator />
      </NavigationContainer> */}
  <VideoPage/>
    </View>
  );
};

export default App;
