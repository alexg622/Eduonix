import React, {Component} from 'react'
import {Text, View, Button, StatusBar, Dimensions, StyleSheet} from 'react-native'
import Todos from './app/components/todos/Todos'

export default class mymobiletodos extends Component{
  static navigationOptions = {
    header: null
  }
  render(){
    return(
      <View style={styles.container}>
        <StatusBar hidden={true} /> 
        <Button
          title="Todos"
          onPress={() => this.props.navigation.navigate("Todos")}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2b4970",
    height: Dimensions.get('window').height
  }
});