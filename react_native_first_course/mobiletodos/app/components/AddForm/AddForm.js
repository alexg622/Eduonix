import React, {Component} from 'react'
import {Text, View, TextInput, Switch, Button, AsyncStorage, StyleSheet} from 'react-native'

export default class AddButton extends Component{
  constructor(){
    super()
    this.state = {
      id: "",
      text: "",
      completed: false,
      todos: []
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

  componentDidMount(){
    this.generateId()
  }

  generateId(){
    let id = Math.floor(Math.random() * 1000000000)
    this.setState({id})
  }

  onTextChange(value){
    this.setState({text: value})
  }

  onCompletedChange(value){
    this.setState({completed: value})
  }
  onSubmit(){
    let todos = this.state.todos
    todos.push({
      id: this.state.id,
      text: this.state.text,
      completed: this.state.completed
    })
    AsyncStorage.setItem('todos', JSON.stringify(todos))
    this.props.navigation.navigate('Todos')
  }

  getTodos(){
    AsyncStorage.getItem('todos').then(value => {
      if(value !== undefined){
        this.setState({todos: JSON.parse(value)})
      }
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
