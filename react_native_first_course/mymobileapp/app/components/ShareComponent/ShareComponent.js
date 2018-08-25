import React, {Component} from 'react';
import {StyleSheet, Share, TouchableHighlight, Text, View} from 'react-native';

export default class ShareComponent extends Component{
  constructor(){
    super()
    this.state = {
      result: ""
    }
  }

  shareMessage(){
    Share.share({
      message: "Eduonix | The best courses on the web"
    })
    .then(this.showResult)
    .catch(error => this.setState({result: "error: " + error.message}))
  }

  showResult(result){
    if(result.action === Share.shareAction){
      this.setState({result: "Shared"})
    } else if(result.action === Share.dismissedActionO){
      this.setState({result: "Dismissed"})
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.wrap}
          onPress={this.shareMessage.bind(this)}
        >
          <View style={styles.button}>
            <Text>Share Message</Text>
          </View>
        </TouchableHighlight>
        <Text>{this.state.result}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom:5,
  },
  button: {
    backgroundColor: 'gray',
    padding:10
  }
})
