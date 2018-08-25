import React, {Component} from 'react';
import {StyleSheet, Button, AppRegistry, Text, View, Alert} from 'react-native';

const alertMessage = "This is your message"

export default class ButtonComponent extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  btnPress(){
    Alert.alert("Alert Title", alertMessage, [
      {text: "Cancel", onPress: () => console.log("Cancel pressed")},
      {text: "Okay", onPress: () => console.log("Okay pressed")},

    ])
  }

  render(){

    return(
      <View style={styles.container}>

        <View style={{flexDirection: "row", justifyContent: "flex-start"}}>
          <Button
          onPress={this.btnPress.bind(this)}
          title="Learn More"
          disabled={false}
          color="violet"
          accessibilityLabel="This is a standard button"
          />
          <Button
          onPress={this.btnPress.bind(this)}
          title="Learn More"
          disabled={true}
          color="coral"
          accessibilityLabel="This is a standard button"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  }
})

AppRegistry.registerComponent('ButtonComponent', () => ButtonComponent)
