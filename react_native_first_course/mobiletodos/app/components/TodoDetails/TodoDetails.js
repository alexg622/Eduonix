import React, {Component} from 'react'
import {Text, View, TouchableHighlight, Button, Share, AsyncStorage, StyleSheet} from 'react-native'

export default class TodoDetails extends Component{
  constructor(props){
    super(props)
    this.state = {
      todo: {}
    }
  }
  static navigationOptions = {
    header: null
  }

  componentWillMount(){
    this.setState({todo: this.props.navigation.getParam("todo")})
  }

  onEdit(){
    const todo = this.state.todo
    this.props.navigation.navigate('EditForm', { todo })
  }

  onDelete(){

  }

  onShare(){

  }

  render(){

    return(
      <View style={styles.bigContainer}>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.editButton}
            onPress={this.onEdit.bind(this)}
          >
            <Text style={styles.text}>Edit Todo</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.delButton}
            onPress={this.onDelete.bind(this)}
          >
            <Text style={styles.text}>Delete Todo</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.shareButton}
            onPress={this.onShare.bind(this)}
          >
            <Text style={styles.text}>Share Todo</Text>
          </TouchableHighlight>
        </View>
        <Button
        title="Home"
        style={styles.homeButton}
        onPress={() => this.props.navigation.navigate("mymobiletodos")}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bigContainer: {
    flexDirection: 'column'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#b0d4ff',
    padding:20
  },
  delButton: {
    backgroundColor: '#800000',
    padding:10,
    marginRight:5,
    marginLeft:5,
    flex: 1
  },
  editButton: {
    backgroundColor: '#397d02',
    padding:10,
    flex: 1
  },
  shareButton: {
    backgroundColor: '#363636',
    padding:10,
    flex: 1
  },
  homeButton: {
    backgroundColor: '#363636',
    padding:10,
    flex: 1
  },
  text: {
    color: "white",
    textAlign: "center"
  }
})
