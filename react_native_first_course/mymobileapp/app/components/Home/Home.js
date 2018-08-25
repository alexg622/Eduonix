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
          title="Go to clipboard component"
          onPress={() => this.props.navigation.navigate('ClipboardComponent')}
        />
        <Button
          title="Go to GeolocationComponent"
          onPress={() => this.props.navigation.navigate("GeolocationComponent")}
        />
        <Button
          title="CameraRollComponent"
          onPress={() => this.props.navigation.navigate("CameraRollComponent")}
        />
        <Button
          title="ShareComponent"
          onPress={() => this.props.navigation.navigate("ShareComponent")}
        />
      </View>
    )
  }
}

export default Home
