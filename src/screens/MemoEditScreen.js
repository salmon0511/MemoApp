import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import CircleButton from '../elements/CircleButton';
import firebase from 'firebase';

class MemoEditScreen extends React.Component{
    state = {
        body:'',
        key:'',
    }
    componentWillMount(){
        
        const{params} = this.props.navigation.state;
        console.log(params);
        this.setState({
            body:params.memo.body, 
            key:params.memo.key});
        console.log('a');
        return;
    }
    handlePress(){
        const {currentUser} = firebase.auth();
        const db = firebase.firestore();
        const newDate = firebase.firestore.Timestamp.now();
        db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
            .update({
                body:this.state.body,
                createdOn:newDate,
            })
            .then(()=>{
                const {navigation} = this.props;
                navigation.state.params.returnMemo({
                    body:this.state.body,
                    key:this.state.key,
                    createdOn:newDate,
                });
                this.props.navigation.goBack();
            })
            .catch(()=>{
                
            });
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.memoEditInput} 
                    multiline value={this.state.body}
                    onChangeText={(text)=>{this.setState({body:text});}}/>
                
                <CircleButton name='check' onPress={this.handlePress.bind(this)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
    },
    memoEditInput:{
        backgroundColor:'#ddd',
        flex:1,
        paddingTop:32,
        paddingLeft:16,
        paddingRight:16,
        paddingBottom:16,
        fontSize:16,
    },
});

export default MemoEditScreen;