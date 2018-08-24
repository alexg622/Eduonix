import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import SimpleComponent1 from './app/components/SimpleComponent1/SimpleComponent1'
import TextInputComponent from './app/components/TextInputComponent/TextInputComponent'


export default class mymobileapp extends Component{
  render(){
    return(
      <View>
        <TextInputComponent />
      </View>
    )
  }
}

AppRegistry.registerComponent('mymobileapp', () => mymobileapp)
