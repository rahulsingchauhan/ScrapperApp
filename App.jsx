import { StatusBar} from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import ForgetPassword from './src/auth/ForgetPassword/ForgetPassword';

const App = () => {
  return (
     <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ForgetPassword/>
      
    </SafeAreaView>
  );
};

export default App;

