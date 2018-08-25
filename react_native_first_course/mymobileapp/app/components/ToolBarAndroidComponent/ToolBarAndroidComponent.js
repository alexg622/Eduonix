import React, {Component} from 'react';
import {StyleSheet, AppRegistry, ToolBarAndroid, Text, View} from 'react-native';

export default class ToolBarAndroidComponent extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }



  render(){

    return(
      <View style={styles.container}>
        <Text>Cant use toolbarandroid with ios</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

AppRegistry.registerComponent('ToolBarAndroidComponent', () => ToolBarAndroidComponent)
