import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


class CircleButton extends React.Component{
    render(){
        return(
            <View style={styles.CircleAddButton}>
                <Text style={styles.CircleAddButtonTitle}>{this.props.children}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    CircleAddButton:{
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
    CircleAddButtonTitle:{
        fontSize:32,
        lineHeight:32,
        color:"#fff",
    },
});

export default CircleButton;