import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
// import SignupScreen from './src/screens/SignupScreen';
// import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';



const App = createStackNavigator({
  Home:{screen:MemoListScreen},
  MemoDetail: {screen:MemoDetailScreen},
  MemoEdit: {screen:MemoEditScreen},
  Login: {screen:MemoEditScreen},
  Signup: {screen:SignupScreen},
},{
  defaultNavigationOptions:{
    title:'Memot',
    headerStyle:{
      backgroundColor:'#FF4744',
    },
    headerTitleStyle:{
      color:"#FFF",
    }
  },
});



export default createAppContainer(App);