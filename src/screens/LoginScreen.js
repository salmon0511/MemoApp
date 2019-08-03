import React from 'react';
import {StyleSheet, View, TextInput, Button,TouchableHighlight, Text, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import { StackActions, NavigationActions } from 'react-navigation';

class LoginScreen extends React.Component{
    state = {
        email:'user3@example.com',
        password:'abcdefg'
    }

    handleSubmit(){
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{

            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Home' }),
                    
                ],
              });
              this.props.navigation.dispatch(resetAction);
        })
        .catch(()=>{
            this.props.navigation.navigate('Home');
          });
        
    }

    handlePress(){
        this.props.navigation.navigate('Signup');
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>ログイン</Text>
                <TextInput
                    style={styles.input}
                    value={this.state.email}
                    onChangeText={(text)=>{this.setState({email:text});}}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Email Adress'
                    />
                <TextInput
                    style={styles.input}
                    value={this.state.password}
                    onChangeText={(text)=>{this.setState({password:text});}}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder='Password'
                    secureTextEntry

                    />
                <TouchableHighlight style={styles.button} onPress={this.handleSubmit.bind(this)}>
                    <Text style={styles.buttonItem}> ログインする </Text>
                </TouchableHighlight>

                <TouchableOpacity style={styles.signup} onPress={this.handlePress.bind(this)}>
                    <Text style={styles.signupText}>メンバー登録をする</Text>
                </TouchableOpacity>
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
    },
    signup:{
        marginTop:16,
        alignSelf:'center',
    },
    signupText:{
        fontSize:16,
        color:'darkgray',
    }
});

export default LoginScreen;