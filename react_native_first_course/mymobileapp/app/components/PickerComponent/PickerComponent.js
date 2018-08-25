import React, {Component} from 'react';
import {Picker, StyleSheet, AppRegistry, Text, View} from 'react-native';

export default class PickerComponent extends Component{
  constructor(){
    super()
    this.state = {
      category: "Technology"
    }
  }

  onValueChange(key, value){
    console.log(key+":"+value);
    this.setState({category: value})
  }

  render(){
    return(
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.category}
          onValueChange={this.onValueChange.bind(this, 'category')}
          prompt="Category"
          enabled={true}
          mode="dropdown"
        >

          <item label="Technology" value="techology"/>
          <item label="Business" value="business"/>
          <item label="Cooking" value="cooking"/>
        </Picker>
        <Text>Selected Category: {this.state.category}</Text>
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

AppRegistry.registerComponent('PickerComponent', () => PickerComponent)
