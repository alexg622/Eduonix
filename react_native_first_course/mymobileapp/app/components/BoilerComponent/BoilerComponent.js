import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class SceneComponent2 extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <View>
        <Text>Scene2</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('SceneComponent2', () => SceneComponent2)
