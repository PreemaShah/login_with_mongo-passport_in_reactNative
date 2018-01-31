import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import React,{Component} from 'react';
import {View,Text} from 'react-native';


 const RadioButtonProject =({label,onPress,radio_props})=>{



        return (
            <View>
                <Text style={styles.textStyle} >
                    {label}
                </Text>
                <RadioForm
                    radio_props={radio_props}
                    style={styles.RadioButtonStyle}
                    initial={0}
                    onPress={onPress}
                    formHorizontal={true}
                    buttonColor={'#2196f3'}
                    animation={false}
                >

                    <RadioButtonLabel
                        labelHorizontal={true}
                        labelStyle={{fontSize: 20, color: '#2ecc71'}}
                        labelWrapStyle={{}}
                    />
                </RadioForm>
            </View>
        );

}
const styles =
    {
        RadioButtonStyle:{
            paddingLeft:80
        },
        textStyle:{
            fontSize:18,

        }
    };
export {RadioButtonProject}