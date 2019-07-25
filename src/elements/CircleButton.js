import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';


const CustomIcon = createIconSet({
    pencil:'\uf303',
    plus:'\uf067',
}, 'FontAwsome');

class CircleButton extends React.Component{
    state = {
        fontloaded:false,
    }
    async componentWillMount() {
        await Font.loadAsync({
          FontAwsome: fontAwsome,
        });

        this.setState({fontloaded:true});
    }
    
    render(){
        const {name, style, color} = this.props;

        let bgColor = '#3EC966';
        let textColor = '#fff';

        if(color === 'white'){
            bgColor = '#fff';
            textColor = '#3EC966';
        }


        return(
            <View style={[styles.CircleAddButton, style, {backgroundColor:bgColor}]}>
                {
                    this.state.fontloaded ? (
                        <CustomIcon name={name} style={[styles.CircleAddButtonTitle, {color:textColor}]} />
                    ): null
                }
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
        fontFamily:'FontAwsome',
        fontSize:24,
    },
});

export default CircleButton;