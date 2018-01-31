 import React from 'react';
import {Text,View} from 'react-native';

const CardItem=(props)=>{
    return(
        <View style={Styles.containerStyle}>
            {props.children}
        </View>
    );
};

const Styles={
    containerStyle:{
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start',
        flexDirection:'row',
        position:'relative',
        borderColor:'#ddd'
    }
}

export {CardItem};