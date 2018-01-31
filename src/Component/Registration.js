import React,{Component} from 'react';
import {Text,View} from 'react-native';
import {Card,CardItem,Input,Button,Radio} from "./Common";

class Registration extends Component
{
    state={Name:'',Number:'',gender:'',hobbies:'',field:''}
    render()
    {
        return(
            <Card>
                <CardItem>
                    <Input
                        label={'Name:'}
                        value={this.state.Name}
                        placeholder='Name'
                    />
                </CardItem>
                <CardItem>
                    <Input
                        label={'Number:'}
                        value={this.state.Number}
                        placeholder='Number'
                    />
                </CardItem>
                <CardItem>
                    <Radio
                        onPress={(gender1)=>{this.setState({gender:'gender1'})}}

                    />
                    <Radio
                        onPress={(gender1)=>{this.setState({gender:'gender1'})}}
                    />
                </CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>
                <CardItem></CardItem>
            </Card>
        )
    }
}
export default Registration;