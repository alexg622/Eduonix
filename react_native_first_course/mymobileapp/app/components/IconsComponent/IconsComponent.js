import React, {Component} from 'react';
import {StyleSheet, AppRegistry, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class IconsComponent extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }



  render(){

    return(
      <View style={styles.container}>
        <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.loginWithFacebook}>
        Login with Facebook
        </Icon.Button>
        <Icon name="rocket" size={30} color="#900" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  }
})

AppRegistry.registerComponent('IconsComponent', () => IconsComponent)
