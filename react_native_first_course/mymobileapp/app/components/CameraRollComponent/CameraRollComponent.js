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

  componentWillMount(){
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
    if(!this.state.imagesLoaded){
      return(
        <ActivityIndicator
          style={[styles.centering, styles.gray]}
          size='large'
          color='black'
        />
      )
    }
    console.log(this.state.images);
    return(
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.imageGrid}>
            {this.state.images.map(image => <Image style={styles.image} key={image.uri} source={{uri: image.uri}}/>)}
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height:58,
    backgroundColor: 'lightgray'
  },
  imageGrid:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:10
  },
  image: {
    width:180,
    height:180
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:8
  },
  gray: {
    backgroundColor: 'gray'
  }
})
