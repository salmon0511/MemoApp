import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import firebase from 'firebase';
// import SignupScreen from './src/screens/SignupScreen';
// import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import ENV from './env.json';

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(firebaseConfig);

const App = createStackNavigator({
  Login: {screen:LoginScreen},
  Signup: {screen:SignupScreen},
  Home:{screen:MemoListScreen},
  MemoDetail: {screen:MemoDetailScreen},
  MemoEdit: {screen:MemoEditScreen},
},{
  defaultNavigationOptions:{
    title:'Memot',
    headerTintColor:'#fff',
    headerBackTitle:null,
    headerStyle:{
      backgroundColor:'#FF4744',
    },
    headerTitleStyle:{
      color:"#FFF",
    }
  },
});



export default createAppContainer(App);