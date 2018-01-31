import React from 'react';
import {Text,View,TextInput} from 'react-native';

 const Input = ({label,value,onChangeText,placeholder,secureTextEntry})=>{
     return(
         <View style={styles.containerStyle}>
         <Text style={styles.textStyle}>{label}</Text>
             <TextInput
                 secureTextEntry={secureTextEntry}
                 placeholder={placeholder}
                 autoCorrect={false}
                 value={value}
                 autoCapitalize = 'none'
                 onChangeText={onChangeText}
                 style={styles.inputStyle}>
             </TextInput>
         </View>
     )
 }

 const styles={
     inputStyle:{
         fontSize:18,
        marginLeft:5,
         marginRight:5,
         color:'#000',
         flex:2,
         lineHeight:25
     },
     textStyle:{
         fontSize:18,
         paddingRight:5,
         flex:1

     },
     containerStyle:{
         flex:1,
         height:40,
         flexDirection:'row',
         alignItems:'center'
     }
 }

 export {Input};