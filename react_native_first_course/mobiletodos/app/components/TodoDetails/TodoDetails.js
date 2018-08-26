import React, {Component} from 'react'
import {Text, View, TouchableHighlight, Button, Share, AsyncStorage, StyleSheet} from 'react-native'

export default class TodoDetails extends Component{
  constructor(){
    super()
    this.state = {
      todo: {}
    }
  }
  static navigationOptions = {
    header: null
  }

  componentDidMount(){
    this.setState({todo: this.props.navigation.getParam("todo")})
  }

  render(){

    console.log(this.state.todo);
    return(
      <View>
        <Text>Details</Text>
        <Button
          title="Home"
          onPress={() => this.props.navigation.navigate("mymobiletodos")}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
