import React from 'react';
import {View} from 'react-native';


const Card=(props)=>{
    return(
        <View style={styles.containerStyle}>{props.children}</View>
    );
};

const styles={
    containerStyle:{
        paddingTop:20,
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:2,
        shadowColor:'#000',
        borderBottomWidth:0,
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.5,
        elevation:1,
        marginBottom:10,
        marginLeft:7,
        marginRight:7
    }
}
export {Card};