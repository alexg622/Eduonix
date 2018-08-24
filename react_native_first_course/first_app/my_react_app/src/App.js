import React, { Component } from 'react';
import './App.css';
import Component1 from './components/component1'

class App extends Component {
  render() {
    return (
      <div className="App">
        <component1 message="hi there"/> 
      </div>
    );
  }
}

export default App;
