import React from 'react';
import {Text,TouchableOpacity} from 'react-native';

const Button =({onPress,children})=>
{
    return(
        <TouchableOpacity onPress={onPress}
                          style={Styles.ButtonStyle} >
            <Text style={Styles.TextStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};
const Styles={
    TextStyle:{
        alignSelf:'center',
        fontSize:16,
        color:'#007aff',
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10


    },
    ButtonStyle:{
        alignSelf:'stretch',
        flex:1,
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#007aff',
        marginRight:5,
        marginLeft:5,
    }
}
export {Button};