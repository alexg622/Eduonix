import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Dimensions, View} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import mymobiletodos from './mymobiletodos'
import Todos from './app/components/todos/Todos'

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>MobileTodos</Text>
        <AppStackNavigator />
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  mymobiletodos: mymobiletodos,
  Todos: Todos
})

const styles = StyleSheet.create({
  container: {
    paddingTop:10,
    backgroundColor: "#2b4970",
    height: Dimensions.get('window').height
  },
  text: {
    color: "white",
    fontSize:25
  }
});
