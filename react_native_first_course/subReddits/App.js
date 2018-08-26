import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Posts from './app/components/Posts/Posts'
import HeaderBar from './app/components/HeaderBar/HeaderBar'
import PostDetails from './app/components/PostDetails/PostDetails'

const RootStack = createStackNavigator(
  {
    Posts: Posts,
    Details: PostDetails,
    Header: HeaderBar
  },
  {
    navigationOptions: {
      header: <HeaderBar />
    },
  }
)


export default class App extends Component<Props> {
  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({

});
