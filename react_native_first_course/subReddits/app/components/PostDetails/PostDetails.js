import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class PostDetails extends Component<Props> {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Post Details</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
