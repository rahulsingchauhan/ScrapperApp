import { StatusBar} from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import PostScrapItem from './src/screens/Post Scrap Item/PostScrapItem';
import AcceptDecline from './src/Scrapper Screens/AcceptDecline/AcceptDecline';


const App = () => {
  return (
     <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
  
      {/* <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer> */}
     <AcceptDecline/>
    </SafeAreaView>
  );
};

export default App;

