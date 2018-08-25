import React, {Component} from 'react';
import {StyleSheet, AppRegistry, Text, View, Switch} from 'react-native';

export default class SwitchComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      value: this.props.value

    }
  }



  static defaultProps = {
    value: false
  }

  onValueChange(){

    this.state.value ? this.setState({value: false}) : this.setState({value: true})
  }

  render(){
    console.log(this.props.value);
    let toggle = this.state.value ? "ON" : "OFF"
    return(
      <View style={styles.container}>
        <Text>{toggle}</Text>
        <Switch
          value={this.state.value}
          onValueChange={this.onValueChange.bind(this)}
          onTintColor="green"
          tintColor="black"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 50
  }
})

AppRegistry.registerComponent('SwitchComponent', () => SwitchComponent)
