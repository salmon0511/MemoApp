import React from 'react';
import {StyleSheet, View,} from 'react-native';
import Appbar from "../components/Appbar";
import CircleButton from '../elements/CircleButton';
import MemoList from "../components/MemoList";
import firebase from 'firebase';

class MemoListScreen extends React.Component{
    state = {
        memoList:[],
    }
    
    componentWillMount(){
        const {currentUser} = firebase.auth();
        firebase.firestore().collection(`users/${currentUser.uid}/memos`)
        .onSnapshot((querySnapshot)=>{
            const memoList = [];
            querySnapshot.forEach((doc)=>{
                memoList.push({...doc.data(),key:doc.id});
            });
            this.setState({memoList});
        });
        
    }


    handlePress(){
        this.props.navigation.navigate('MemoCreate');
    }
    render(){
        return(
            <View style={styles.container}>
                <MemoList memoList={this.state.memoList} navigation={this.props.navigation}/>
                <CircleButton name="plus" onPress={this.handlePress.bind(this)}/>
            </View> 
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        backgroundColor:"#FFFDF6",
    },
});


export default MemoListScreen;