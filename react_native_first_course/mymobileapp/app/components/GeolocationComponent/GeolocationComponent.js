import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class GeolocationComponent extends Component{
  constructor(){
    super()
    this.state = {
      position: 'unkown'
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) =>{
      let myPosition = JSON.stringify(position)
      this.setState({position: myPosition})
    },
    error => alert(JSON.stringify(error)))
  }

  render(){

    return(
      <View style={styles.container}>
        <Text>POSITION: {this.state.position}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
