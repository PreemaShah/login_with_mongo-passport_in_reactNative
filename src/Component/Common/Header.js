import React from 'react';
import {Text,View} from 'react-native';

const Header = (props)=>{

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};


const styles={
    viewStyle:{
        paddingTop:20,
        backgroundColor:'#F8F8F8',
        alignItems:'center',
        height:60,
        paddingTop:15,
        justifyContent:'center',
        shadowColor:'#000',
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.4,
        elevation:2,
        position:'relative'
    },
    textStyle:{

        paddingTop:10,
        fontSize:30,
    }
};
export {Header};