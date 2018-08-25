import React, {Component} from 'react';
import {StyleSheet, Text, CameraRoll, ActivityIndicator, ScrollView, Image, View} from 'react-native';

export default class CameraRollComponent extends Component{
  constructor(){
    super()
    this.state = {
      images: [],
      imagesLoaded: false
    }
  }

  componentDidMount(){
    console.log("herere");
    console.log(CameraRoll.getPhotos());
    CameraRoll.getPhotos({first: 5}).then(data => {
      const assets = data.edges
      const images = assets.map(asset => asset.node.image)
      this.setState({
        imagesLoaded: true,
        images: images
      })
    },
    err => {
      console.log(err)
    })
  }

  render(){
    console.log(this.state.images);
    return(
      <View style={styles.container}>
        <Text>Current Name: {this.state.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
