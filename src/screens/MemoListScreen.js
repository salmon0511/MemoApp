import React from 'react';
import {StyleSheet, View,} from 'react-native';
import Appbar from "../components/Appbar";
import CircleButton from '../elements/CircleButton';
import MemoList from "../components/MemoList";

class MemoListScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <MemoList/>
                <CircleButton>+</CircleButton>
            </View> 
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
    },
});


export default MemoListScreen;