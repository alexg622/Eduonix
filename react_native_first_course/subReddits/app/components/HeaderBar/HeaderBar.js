import React, {Component} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';

export default class HeaderBar extends Component {
  render() {
    return (
      <View style={styles.bar}>
        <Text style={styles.text}>SubReddit</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: 'coral',
    padding:15
  },
  text: {
    color: "white",
    fontSize:18,
    textAlign: 'center'
  }
});
