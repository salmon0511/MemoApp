import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CircleButton from '../elements/CircleButton';


class MemoDetailScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.memoHeader}>
                    <View>
                        <Text style={styles.memoHeaderTitel}>講座のアイデア</Text>
                        <Text style={styles.memoHeaderDate}>2019/07/24</Text>
                    </View>
                </View>
                <View style={styles.memoContents}>
                    <Text>
                        講座のアイデアです。
                    </Text>
                </View>
                <CircleButton name = "pencil" color='white' style={styles.editButton} onPress={()=>{this.props.navigation.navigate('MemoEdit')}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:"#FFF",
    },
    memoHeader:{
        height:100,
        backgroundColor:"#F4F0F0",
        justifyContent:"center",
        padding:10,
    },
    memoHeaderTitel:{
        fontSize:25,
        fontWeight:"bold",
        color:"#7B7B7B",
        marginBottom:3,

    },
    memoHeaderDate:{
        color:"#7B7B7B",
        fontSize:12,

    },
    memoContents:{
        paddingTop:30,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor:"#fff",
        flex:1,

    },
    editButton:{
        top:75,
    },
});

export default MemoDetailScreen;