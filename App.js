import React,{Component} from 'react';
import {Text,View} from 'react-native';
import LoginForm from './src/Component/LoginForm';
import Registration from './src/Component/Registration'
class App extends Component
{
  render(){
      return(
          <View>
           <Registration/>
          </View>
      )
  }


}
export default App;