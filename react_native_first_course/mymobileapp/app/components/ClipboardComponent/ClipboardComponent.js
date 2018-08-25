import React, {Component} from 'react';
import {StyleSheet, Clipboard, Text, View} from 'react-native';

export default class ClipboardComponent extends Component{
  constructor(){
    super()
    this.state = {
      text: "Nothing"
    }
  }

  setClipboardText(){
    Clipboard.setString("Hello from clipboard")
    Clipboard.getString().then(text => {
      this.setState({text})
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Text onPress={this.setClipboardText.bind(this)}>Tap Here</Text>
        <Text style={{color:"green", margin:20}}>
          {this.state.text}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
