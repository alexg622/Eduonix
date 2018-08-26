import React, {Component} from 'react'
import {Text, View, ListView, Image, AsyncStorage, Button, TouchableHighlight, StyleSheet} from 'react-native'

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

  static navigationOptions = {
    header: null
  }

  componentWillMount(){
    this.getTodos()
  }

  componentDidMount(){
    this.getTodos()
  }

  getTodos(){
    AsyncStorage.getItem('todos').then(value => {
      if(value === undefined) {
        console.log("No todos....");
      } else {
        let todos = JSON.parse(value)
        this.setState({todoDataSource: this.state.todoDataSource.cloneWithRows(todos)})
      }
    })
  }

  pressRow(todo){
    console.log("pressiong");
    console.log(this.props.navigation.navigate);
    this.props.navigation.navigate('TodoDetails', { todo })
  }

  renderRow(todo){
    let image
    if(todo.completed){
      image = <Image
        style={styles.checkImage}
        source={require("./checkmark.png")}
      />
    } else {
      image = <Text></Text>
    }
    return(
      <TouchableHighlight onPress={() => {
        this.pressRow(todo)
      }}>
        <View style={styles.row}>
          <Text style={styles.text}>{todo.text}</Text>
          <View style={styles.check}>
            {image}
          </View>
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
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate("mymobiletodos")}
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
  },
  check: {
    flex:1
  },
  checkImage: {
    alignSelf: "flex-end",
    height:25,
    width:25
  }
})
