import { StatusBar, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import ProtienGraph from './TestScreens/ProtienGraph';
import MealSchedule from './TestScreens/MealSchedule';
import MealTime from './TestScreens/MealTime';
import SignupScreen from './TestScreens/SignupScreen';


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
<SignupScreen/>
    </View>
  );
};

export default App;
