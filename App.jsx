import { StatusBar} from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewPassword from './src/auth/NewPassword/NewPassword';

const App = () => {
  return (
     <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar />
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
      
    </SafeAreaView>
  );
};

export default App;

