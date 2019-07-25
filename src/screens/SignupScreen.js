import React from 'react';
import {StyleSheet, View, TextInput, Button,TouchableHighlight, Text} from 'react-native';

class LoginScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>メンバー登録</Text>
                <TextInput style={styles.input} value='Email Address'/>
                <TextInput style={styles.input} value='Passward'/>
                <TouchableHighlight style={styles.button} underlayColor = "#409C5A" onPress={()=>{}}>
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

export default LoginScreen;