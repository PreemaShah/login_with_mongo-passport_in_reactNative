import React from 'react';
import {View,Text} from 'react-native';
import createReactClass from 'create-react-class';
import RadioForm,{RadioButton,RadioButtonInput,RadioButtonLabel} from 'react-native-simple-radio-button';

const Radio =({onPress})=>{

    var Radio= createReactClass({
        getInitialState: function() {
            return {
                value: 0,
            }
        },
        render(){
            return (

                <View>

                    <RadioForm
                        radio_props={[{label:'male',value:0},{label:'female',value:1}]}
                        initial={0}
                        onPress={onPress}
                    >

                    </RadioForm>

                </View>
        )

        }

})}

export {Radio}