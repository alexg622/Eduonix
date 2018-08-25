import React, {Component} from 'react'
import {Text, View, Button, TouchableHighlight, StyleSheet} from 'react-native'

export default class AddButton extends Component{
  constructor(props){
    super(props)
  }
  // onPress(){
  //   this.props.navigation.navigate('Add')
  // }

  render(){
    return(
        <TouchableHighlight
        style={styles.button}
        onPress={() => this.props.navigate('AddForm')}
        >
        <Text style={styles.text}>Add Todo</Text>
        </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    padding:10,
    marginBottom:10
  },
  text: {
    color: "white",
    textAlign:'center'
  }
})
