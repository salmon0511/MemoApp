import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import BodyText from './src/elements/BodyText';
import SignupScreen from './src/screens/SignupScreen';
import Appbar from './src/components/Appbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar/>
      <SignupScreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:78,
  },
});
