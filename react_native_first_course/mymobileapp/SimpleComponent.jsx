import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class SimpleComponent1 extends Component{
  render(){
    return(
      <View>
        <Text>Simple Component 1</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('SimpleComponent1', () => SimpleComponent1)
