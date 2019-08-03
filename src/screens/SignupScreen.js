import React from 'react';
import {StyleSheet, View, TextInput, Button,TouchableHighlight, Text} from 'react-native';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';


class SignupScreen extends React.Component{
    state={
        email:'',
        password:'',
    }

    handleSubmit(){
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            this.props.navigation.navigate('Home');
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home' }),
                    
                ],
            });
            this.props.navigation.dispatch(resetAction);
        })
        .catch(()=>{
            
        });
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>メンバー登録</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={(text) => {this.setState({email:text});}}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Email Adress'/>
                <TextInput
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={(text) => {this.setState({password:text});}}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Password'
                    secureTextEntry
                    />
                <TouchableHighlight style={styles.button} underlayColor = "#409C5A" onPress={this.handleSubmit.bind(this)}>
                    <Text style={styles.buttonItem}> 送信する </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        padding:24,
        borderColor:"#FFF",

    },
    input:{
        backgroundColor:"#eee",
        height:48,
        marginBottom:16,
        borderWidth:1,
        borderColor:"#ddd",
        padding:8,

    },
    title:{
        fontSize:24,
        alignSelf:"center",
        marginBottom:24,
    },
    button:{
        backgroundColor:'#3EC966',
        height:48,
        borderRadius:4,   
        justifyContent:'center',
        alignItems:'center',
        width:'70%',
        alignSelf:'center',     
        
    },
    buttonItem:{
        color:'#FFF',
        fontSize:18,
    }
});

export default SignupScreen;