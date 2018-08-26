import React, {Component} from 'react'
import {Text, View, TextInput, Switch, Button, AsyncStorage, StyleSheet} from 'react-native'

export default class EditForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.navigation.getParam("todo").id,
      text: this.props.navigation.getParam("todo").text,
      completed: this.props.navigation.getParam("todo").completed
    }
  }

  static navigationOptions = {
    header: null
  }

  componentWillMount(){
    AsyncStorage.getItem("todos").then(value => {
      if(value !== undefined) {
        this.setState({todos: JSON.parse(value)})
      } else {
        null
      }
    })
  }

  onTextChange(value){
    this.setState({text: value})
  }

  onCompletedChange(value){
    this.setState({completed: value})
  }

  onSubmit(){
    AsyncStorage.getItem('todos').then(value => {
      let todos = JSON.parse(value)
      for(let i=0; i<todos.length; i++){
        if(todos[i].id === this.state.id){
          todos.splice(i, 1)
        }
      }
      todos.push({
        id: this.state.id,
        text: this.state.text,
        completed: this.state.completed
      })
      AsyncStorage.setItem('todos', JSON.stringify(todos))
      this.props.navigation.navigate("Todos")
    })
  }

  render(){
    return(
      <View style={styles.addForm}>
        <TextInput
          value={this.state.text}
          placeholder="Todo Text"
          onChangeText = {value => this.onTextChange(value)}
        />
        <View style={styles.completed}>
          <Text>Completed:</Text>
          <Switch
            value={this.state.completed}
            onValueChange={value => this.onCompletedChange(value)}
          />
        </View>
        <View style={styles.submit}>
          <Button
            style={styles.btn}
            onPress={this.onSubmit.bind(this)}
            title="Submit"
            color="black"
          />
        </View>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate("mymobiletodos")}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  completed: {
    flexDirection: "row"
  },
  addForm: {
    backgroundColor: "#b0d4ff",
    padding:20
  },
  submit: {
    marginTop:20
  }
})
