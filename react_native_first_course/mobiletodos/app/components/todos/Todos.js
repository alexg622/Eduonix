import React, {Component} from 'react'
import {Text, View, ListView, TouchableHighlight, StyleSheet} from 'react-native'

export default class Todos extends Component{
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      todoDataSource: ds
    }
    this.pressRow = this.pressRow.bind(this)
    this.renderRow = this.renderRow.bind(this)
  }

  componentWillMount(){
    this.getTodos()
  }

  componentDidMount(){
    this.getTodos()
  }

  getTodos(){
    let todos = [
      {text: "Todo one", completed: false},
      {text: "Todo two", completed: false},
      {text: "Todo three", completed: false},
      {text: "Todo four", completed: false},
      {text: "Todo five", completed: false}
    ]

    this.setState({
      todoDataSource: this.state.todoDataSource.cloneWithRows(todos)
    })
  }

  pressRow(todo){
    console.log(todo);
  }

  renderRow(todo){
    return(
      <TouchableHighlight onPress={() => {
        this.pressRow(todo)
      }}>
        <View style={styles.row}>
          <Text style={styles.text}>{todo.text}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render(){
    return(
      <View style={styles.container}>
        <ListView
        dataSource={this.state.todoDataSource}
        renderRow={this.renderRow}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2b4970"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding:12,
    backgroundColor: "#b0d4ff",
    marginBottom:3
  },
  text: {
    flex:1
  }
})
