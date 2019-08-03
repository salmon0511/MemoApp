import React from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import { Font } from 'expo-font';
import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';
import { createIconSet } from '@expo/vector-icons';


const CustomIcon = createIconSet({
    pencil:'\uf303',
    plus:'\uf067',
    check:'\uf00c',
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
        const {name, style, color, onPress} = this.props;
        let bgColor = '#3EC966';
        let textColor = '#fff';

        if(color === 'white'){
            bgColor = '#fff';
            textColor = '#3EC966';
        }


        return(
            <TouchableHighlight style={[styles.container, style]} onPress={this.props.onPress} underlayColor='transparent'>
                <View style={[styles.CircleAddButton, {backgroundColor:bgColor}]}>
                    {
                        this.state.fontloaded ? (
                            <CustomIcon name={name} style={[styles.CircleAddButtonTitle, {color:textColor}]} />
                        ): null
                    }
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({

    container:{
        position:"absolute",
        bottom:32,
        right:32,
        width:56,
        height:56,

    },

    CircleAddButton:{
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