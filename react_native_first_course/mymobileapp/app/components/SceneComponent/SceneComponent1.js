import React, {Component} from 'react';
import {AppRegistry, Button, Text, View} from 'react-native';

export default class SceneComponent1 extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  // static navigationOptions = {
  //   header: null
  // }

  render(){
    return(
      <View>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
          />
        <Button
          title="Go to home"
          onPress={() => this.props.navigation.popToTop()}
          />
        <Text>Scene 1</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('SceneComponent1', () => SceneComponent1)
