import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import BodyText from './src/elements/BodyText';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import Appbar from './src/components/Appbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar/>
      <MemoDetailScreen/>
      
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
