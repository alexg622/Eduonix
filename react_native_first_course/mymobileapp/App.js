import React, {Component} from 'react';
import {StyleSheet, AppRegistry, Text, View} from 'react-native';
import SimpleComponent1 from './app/components/SimpleComponent1/SimpleComponent1'
import TextInputComponent from './app/components/TextInputComponent/TextInputComponent'
import SliderComponent from './app/components/SliderComponent/SliderComponent'
import PickerComponent from './app/components/PickerComponent/PickerComponent'
import SwitchComponent from './app/components/SwitchComponent/SwitchComponent'
import StyledComponent from './app/components/StyledComponent/StyledComponent'
import FlexComponent from './app/components/FlexComponent/FlexComponent'
import FlexComponent2 from './app/components/FlexComponent2/FlexComponent2'
import TouchableComponent from './app/components/TouchableComponent/TouchableComponent'
import ButtonComponent from './app/components/ButtonComponent/ButtonComponent'
import ScrollViewComponent from './app/components/ScrollViewComponent/ScrollViewComponent'
import StatusBarComponent from './app/components/StatusBarComponent/StatusBarComponent'
import ToolBarAndroidComponent from './app/components/ToolBarAndroidComponent/ToolBarAndroidComponent'
import IconsComponent from './app/components/IconsComponent/IconsComponent'


export default class mymobileapp extends Component{
  render(){
    return(
      <View style={styles.container}>
        <IconsComponent />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // container: {
  //   justifyContent: "center",
  //   alignItems: "center"
  // }
})
AppRegistry.registerComponent('mymobileapp', () => mymobileapp)
