import React,{Component} from 'react';
import {Text,View,Alert} from 'react-native';
import {Card,CardItem,Input,Button,RadioButtonProject} from "./Common";
import {DropDownList} from './Common/DropDownList';
import DropdownList from "./Common/DropDownList";
import {MediaQuery} from 'react-native-responsive';

class Registration extends Component
{
    state={Name:'',Number:'',gender:'',city:'',email:'',password:''}


    onRegButtonClick(){

        fetch("http://localhost:3000/employee",{

            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Name:this.state.Name,
                Number:this.state.Number,
                gender:this.state.gender,
                city:this.state.city,
                email:this.state.email,
                password:this.state.password
            })
        }).then((response)=>response.json()).then((responseJson)=>{
            Alert.alert(responseJson);
        }).catch((error)=>{
            console.error(error);
        });


        };

    render()
    {return(
        <MediaQuery minDeviceWidth={320} maxDeviceHeight={720}>
           <View>
            <Card>
                <CardItem>
                    <Input
                        label={'Name:'}
                        value={this.state.Name}
                        onChangeText={Name => this.setState({Name})}
                        placeholder='Name'
                    />
                </CardItem>
                <CardItem>
                    <Input
                        label={'Number:'}
                        value={this.state.Number}
                        onChangeText={Number => this.setState({Number})}
                        placeholder='Number'
                    />
                </CardItem>
                <CardItem>
                    <RadioButtonProject
                        onPress={(value) => {
                            this.setState({gender:value})}}
                        radio_props={[
                            {label: 'Male', value: 'male'},
                            {label: 'Female', value: 'female' }]}
                        label={'Gender:'}
                    />
                </CardItem>

                    <DropdownList
                        label={'City'}
                        data={[
                            {
                                value:'Surat'
                             },
                            {
                                value:'Vapi'
                            }]}
                        onChangeText={(value)=>{
                            this.setState({city:value})
                        }}
                    />
                <CardItem>
                    <Input
                        label={'Email:'}
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        placeholder='test.user@gmail.com'
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
                    <Button onPress={this.onRegButtonClick.bind(this)}>
                        Register
                    </Button>
                </CardItem>

            </Card>
           </View>
        </MediaQuery>
        )
    }
}
export default Registration;