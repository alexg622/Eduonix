import React, {Component} from 'react';
import {Text, Button, View} from 'react-native';

class Home extends Component{
  constructor(){
    super()
    this.state = {

    }
  }

  render(){
    return(
      <View>
        <Button title="Go to Scene 1"
          onPress={() => this.props.navigation.navigate("Scene1")}
        />
        <Button title="AsyncStorageComponent"
          onPress={() => this.props.navigation.navigate("AsyncStorageComponent")}
        />
        <Button title="Go to Scene 2"
          onPress={() => this.props.navigation.navigate("Scene2")}
        />
        <Button
          title="CameraRollComponent"
          onPress={() => this.props.navigation.navigate("CameraRollComponent")}
        />
      </View>
    )
  }
}

export default Home
