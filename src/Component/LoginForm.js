import React,{Component} from 'react';
import {TextInput,Text,View,Alert} from 'react-native';
//import {fetch} from 'react-native-fetch';
import {Card,CardItem,Button,Input,Spinner,Header} from "./Common";

class LoginForm extends Component{
    state={email:'',password:'',error:'',loading:false};


    onButtonClick(){
        fetch("http://localhost:3000/user",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:this.state.email,
                password:this.state.password
            })
        });
    }

    render() {
        return (
            <View>
                <Header headerText='LogIn'/>
                <Card>
                    <CardItem>
                        <Input
                            label={'Email:'}
                            value={this.state.email}
                            onChangeText={email => this.setState({email})}
                            placeholder='user@gmail.com'
                        />
                    </CardItem>
                    <CardItem>
                        <Input
                            label={'Password:'}
                            secureTextEntry
                            value={this.state.password}
                            onChangeText={password => this.setState({password})}
                            placeholder='Password'
                        />
                    </CardItem>
                    <CardItem>
                        <Button onPress={this.onButtonClick.bind(this)}>
                            LogIn
                        </Button>
                    </CardItem>
                </Card>
            </View>
        )
    }

}
export default LoginForm;