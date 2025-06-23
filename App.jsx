import { StyleSheet,View } from 'react-native'
import React from 'react'
import SignUpScreen from './src/auth/SignUp/SignUpScreen'


const App = () => {
  return (
    <View style={styles.container}>
  <SignUpScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})