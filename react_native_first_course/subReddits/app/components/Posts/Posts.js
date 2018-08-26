import React, {Component} from 'react';
import {StyleSheet, Picker, Slider, StatusBar, Image, ListView, TouchableHighlight, Text, View} from 'react-native';
import HeaderBar from '../HeaderBar/HeaderBar'

export default class Posts extends Component<Props> {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      category: 'food',
      limit: 5,
      postDataSource:ds
    }
    this.renderRow = this.renderRow.bind(this)
    this.pressRow = this.pressRow.bind(this)
  }
  // static navigationOptions = {
  //   header: null
       // title: "Posts"
  // }

  componentDidMount(){
    this.fetchPosts()
  }

  fetchPosts(){
    fetch('https://www.reddit.com/r/' + this.state.category + '/top.json?limit=' + this.state.limit)
      .then(res => res.json())
      .then(res => {
        let posts = res.data.children
        this.setState({
          postDataSource: this.state.postDataSource.cloneWithRows(posts)
        })
      })
  }

  pressRow(post){
    console.log(post);
    this.props.navigation.navigate("Details", { post })
  }

  renderRow(post){
    let image
    try{
      if(typeof post.data.preview.images[0].source.url === undefined){
        image = <Text></Text>
      } else {
        image = <Image style={styles.thumb} source={{uri: post.data.preview.images[0].source.url}}/>
      }
    }catch(e){
      console.log(e);
    }
    return(
      <TouchableHighlight onPress={() => {
        this.pressRow(post)
      }}>
        <View style={styles.row}>
          {image}
          <Text style={styles.text}>{post.data.title}</Text>
        </View>
      </TouchableHighlight>

    )
  }

  changeCategory(value){
    this.setState({category: value}, () => {
      this.fetchPosts()
    })
  }

  changeLimit(value) {
    this.setState({limit: value}, () => {
      this.fetchPosts()
    })
  }

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.category}
          onValueChange={value => this.changeCategory(value)}
        >
          <Picker.Item label="Food" value='food' />
          <Picker.Item label="Sports" value='sports' />
          <Picker.Item label="Books" value='books' />
          <Picker.Item label="Funny" value='funny' />
        </Picker>
        <Slider
          maximumValue={25}
          minimumValue={5}
          step={5}
          value={this.state.limit}
          onValueChange={value => this.changeLimit(value)}
        />
        <ListView
          dataSource={this.state.postDataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding:12,
    backgroundColor: 'lightgray',
    marginBottom:3
  },
  text:{
    flex:3
  },
  thumb: {
    height:60,
    width:60,
    flex:1,
    margin:4
  }
});
