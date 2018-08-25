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
import ListViewComponent from './app/components/ListViewComponent/ListViewComponent'
import FetchComponent from './app/components/FetchComponent/FetchComponent'
import SceneComponent1 from './app/components/SceneComponent/SceneComponent1'
import SceneComponent2 from './app/components/SceneComponent/SceneComponent2'
import Home from './app/components/Home/Home'
import {createStackNavigator} from 'react-navigation'

export default class mymobileapp extends Component{

  render(){
    return(
      <AppStackNavigator />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  }
})

const AppStackNavigator = createStackNavigator({
  Home: Home,
  Scene2: SceneComponent2,
  Scene1: SceneComponent1
})
