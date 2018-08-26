import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class HeaderBar extends Component<Props> {
  render() {
    return (
      <View style={styles.bar}>
        <Text style={styles.text}>Subreddits</Text>
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
