import React, {Component} from 'react';
import {TextInput, StyleSheet, AppRegistry, Text, View} from 'react-native';

export default class TextInputComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      value: this.props.value
    }
  }

  static defaultProps = {
    value: "Hello World"
  }

  onChangeText(value){
    console.log(value);
    this.setState({value: value})
  }

  onSubmitEditing(e){
    console.log("onSubmitEditing called: " + e);
  }

  onBlur(e){
    console.log('onBlur Called');
  }

  onFocus(e){
    console.log("onFocus Called");
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput
          placeholder="Type Something"
          value={this.state.value}
          maxLength={10}
          selectionColor="blue"
          selectTextOnFocus={true}
          editable={true}
          onChangeText={value => this.onChangeText(value)}
          onBlur={e => this.onBlur(e)}
          onFocus={e => this.onFocus(e)}
          onSubmitEditing={e => this.onSubmitEditing(e.nativeEvent.text)}
        />
        <Text>{this.state.value}</Text>
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

AppRegistry.registerComponent('TextInputComponent', () => TextInputComponent)
