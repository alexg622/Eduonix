import React, {Component} from 'react';
import {StyleSheet, Button, ScrollView, AppRegistry, Text, View, Alert} from 'react-native';

const alertMessage = "This is your message"

export default class ScrollViewComponent extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){

    return(
      <View style={styles.container}>
        <Button title="Scroll" onPress={() => {_scrollView.scrollTo({y:400})}}/>
        <ScrollView
          ref={(scrollView) => {_scrollView = scrollView}}
          contentContainerStyle={{padding:20}}
          horizontal={false}
          onContentSizeChange={(contentWidth, contentHeight) => console.log(`height: ` + contentHeight + `Width: ` + contentWidth)}
          onScroll={() => console.log("Scrolling...")}
          pagingEnabled={true}
          scrollEnabled={true}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={false}
        >
          <Text style={{fontSize:96}}>Start scrolling</Text>
          <Text style={{fontSize:96}}>Hello World</Text>
          <Text style={{fontSize:96}}>Hello World</Text>
          <Text style={{fontSize:96}}>Hello World</Text>
          <Text style={{fontSize:96}}>Hello World</Text>
          <Text style={{fontSize:96}}>Hello World</Text>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

AppRegistry.registerComponent('ScrollViewComponent', () => ScrollViewComponent)
