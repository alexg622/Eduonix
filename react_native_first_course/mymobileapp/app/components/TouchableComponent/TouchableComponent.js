import React, {Component} from 'react';
import {StyleSheet, TouchableHighlight, Image, TouchableOpacity, AppRegistry, Text, View} from 'react-native';

export default class TouchableComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      toggle: true
    }
  }

  render(){
    let isToggle = this.state.toggle ? "YES" : "NO"
    return(
      <View>
        <Text>{isToggle}</Text>
        <TouchableHighlight
          onPress={() => this.setState({toggle: !this.state.toggle})}
          underlayColor="red"
          >
          <Text style={styles.toggle}>Toggle</Text>
        </TouchableHighlight>
        <TouchableOpacity
          onPress={() => this.setState({toggle: !this.state.toggle})}
        >
          <Image
            style={styles.button}
            source={require('./login_button.png')}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toggle: {
    padding:8,
    backgroundColor: "#ccc"
  },
  button: {
    height: 200,
    width: 200
  }
})

AppRegistry.registerComponent('TouchableComponent', () => TouchableComponent)
