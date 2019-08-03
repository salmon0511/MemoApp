import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import CircleButton from '../elements/CircleButton';


const dateString = (date)=> {
    const str = date.toDate().toISOString();
    return str.split('T')[0];
};


class MemoDetailScreen extends React.Component{
    state={
        memo:{},
    }
    
    componentWillMount(){
        
        const {params} = this.props.navigation.state;
        this.setState({memo:params.memo});
    }

    returnMemo(memo){
        this.setState({memo});
    }
    
    render(){
        const{memo} = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.memoHeader}>
                    <View>
                        <Text style={styles.memoHeaderTitel}>{memo.body.substring(0,10)}</Text>
                        <Text style={styles.memoHeaderDate}>{dateString(memo.createdOn)}</Text>
                    </View>
                </View>
                <View style={styles.memoContents}>
                    <Text style={styles.memoBody}>
                        {memo.body}
                    </Text>
                </View>
                <CircleButton 
                    name = "pencil"
                    color='white'
                    style={styles.editButton}
                    onPress={()=>{this.props.navigation.navigate('MemoEdit',{memo,returnMemo:this.returnMemo.bind(this)});}}/>
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
    memoBody:{
        lineHeight:22,
        fontSize:15,
    }
});

export default MemoDetailScreen;