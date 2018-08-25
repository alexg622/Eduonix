import React, {Component} from 'react';
import {Button, AsyncStorage, TextInput, StyleSheet, Text, View} from 'react-native';


const todos = [
  {name: "Todo 1"},
  {name: "Todo 2"},
  {name: "Todo 3"},
  {name: "Todo 4"}
]

export default class AsyncStorageComponent extends Component{
  constructor(){
    super()
    this.state = {
      name: ""
    }
  }

  saveName(value){
    AsyncStorage.setItem('name', value)
    this.setState({name: value})
  }

  getName(){
    AsyncStorage.getItem("name").then(value => {
      this.setState({name: value})
    })
  }

  componentWillMount(){
    this.getName()
    this.saveTodos()
    this.getTodos()
  }

  saveTodos(){
    AsyncStorage.setItem("todos", JSON.stringify(todos))
  }

  getTodos(){
    AsyncStorage.getItem("todos").then(value => {
      console.log(JSON.parse(value));
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput
          placeholder="Type Name"
          onSubmitEditing={e => this.saveName(e.nativeEvent.text)}
        />
        <Text>Current Name: {this.state.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
