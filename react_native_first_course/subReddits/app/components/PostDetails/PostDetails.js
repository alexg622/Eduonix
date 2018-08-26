import React, {Component} from 'react';
import {Platform, Button, Image, TouchableOpacity, Linking, StyleSheet, Text, View} from 'react-native';

export default class PostDetails extends Component<Props> {
  constructor(props){
    super(props)
    let image
    let post = this.props.navigation.getParam("post")
    try{
      if(typeof post.data.preview.images[0].source.url === undefined){
        image = <Text></Text>
      } else {
        image = post.data.preview.images[0].source.url
      }
    }catch(e){
      console.log(e);
    }
    this.state = {
      title: this.props.navigation.getParam("post").data.title,
      score: this.props.navigation.getParam("post").data.score,
      comments: this.props.navigation.getParam('post').data.num_comments,
      image: image,
      permaLink: this.props.navigation.getParam("post").data.permaLink
    }
  }

  openPage(){
    Linking.openURL("https://reddit.com/" + this.state.permaLink)
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>
          {this.state.title}
        </Text>
        <Text style={
          styles.stats}>Scrore: {this.state.score} | comments: {this.state.comments}
        </Text>
        <Image style={styles.image} source={{url: this.state.image}} />
        <TouchableOpacity style={styles.btn} title="Open Reddit" onPress={() => this.openPage()}>
          <Text style={styles.btnText}>Open Reddit</Text>
        </TouchableOpacity>
        <Button title="Posts" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    padding:10,
    textAlign: 'center',
    fontSize:16,
    backgroundColor:'lightgray'
  },
  stats: {
    textAlign: 'center',
    padding:4,
    backgroundColor: "#333",
    color: "#fff"

  },
  image: {
    width:400,
    height:200
  },
  btn: {
    backgroundColor: "lightgray",
    padding:10
  },
  btnText: {
    textAlign: 'center'
  }
});
