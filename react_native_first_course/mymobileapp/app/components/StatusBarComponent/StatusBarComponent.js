import React, {Component} from 'react';
import {StyleSheet, AppRegistry, StatusBar, Text, View} from 'react-native';

export default class StatusBarComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      barColor: this.props.barColor
    }
  }

  static defaultProps = {
    barColor: 'skyblue'
  }

  render(){

    return(
      <View style={styles.container}>
        <StatusBar
          backgroundColor={this.state.barColor}
          barStyle="dark-content"
          hidden={false}
          barColor="red"
          translucent={false}
        />
        <Text>StatusBar Component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10
  }
})

AppRegistry.registerComponent('StatusBarComponent', () => StatusBarComponent)
