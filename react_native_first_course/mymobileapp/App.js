import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import SimpleComponent1 from './app/components/SimpleComponent1/SimpleComponent1'
import TextInputComponent from './app/components/TextInputComponent/TextInputComponent'
import SliderComponent from './app/components/SliderComponent/SliderComponent'
import PickerComponent from './app/components/PickerComponent/PickerComponent'
import SwitchComponent from './app/components/SwitchComponent/SwitchComponent'
import StyledComponent from './app/components/StyledComponent/StyledComponent'


export default class mymobileapp extends Component{
  render(){
    return(
      <View>
        <StyledComponent />
      </View>
    )
  }
}

AppRegistry.registerComponent('mymobileapp', () => mymobileapp)
