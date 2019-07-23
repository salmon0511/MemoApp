import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import BodyText from './src/elements/BodyText';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View>
          <Text style={styles.appbarTitle}>MEMMOT</Text>
        </View>
      </View>

      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2019/07/22</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2019/07/22</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2019/07/22</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2019/07/22</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2019/07/22</Text>
        </View>

      </View>
      <View style={styles.memoAddButton}>
        <Text style={styles.memoAddButtonTitle}>+</Text>
      </View>
      
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
  memoAddButton:{
    position:"absolute",
    bottom:32,
    right:32,
    width:56,
    height:56,
    backgroundColor:"#0085ff",
    borderRadius:28,
    justifyContent:"center",
    alignItems:"center",
    shadowColor:"black",
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.2,
    shadowRadius:3,

  },
  memoAddButtonTitle:{
    fontSize:32,
    lineHeight:32,
    color:"#fff",
  },
  memoList:{
    width:"100%",
    flex:1,
  },
  memoListItem:{
    padding:16,
    borderBottomWidth:1,
    borderBottomColor:"#ddd",
    backgroundColor:"#fff"
  },
  memoTitle:{
    fontSize:18,
    marginBottom:4,
  },
  memoDate:{
    fontSize:12,
    color:"#a2a2a2",
  },
  appbar:{
    position:"absolute",
    top:0,
    left:0,
    right:0,
    height:78,
    paddingTop:30,
    backgroundColor:'#FF4744',
    justifyContent:'center',
    alignItems:'center',
    shadowColor:"black",
    shadowOffset:{width:0, height:0},
    shadowOpacity:0.5,
    shadowRadius:3,
    zIndex:10,
  },
  appbarTitle:{
    color:"#FFF",
    fontSize:18,
  }
});
