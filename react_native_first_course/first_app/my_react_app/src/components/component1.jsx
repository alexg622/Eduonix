import React from 'react'

class Component1 extends React.Component{
  constructor(){
    super()
    this.state = {
      showMessage: true
    }
  }

  componentWillMount(){
    this.setState({
      showMessage: false
    })
    console.log("ran......");
  }

  showMessage(){
    this.setState({
      showMessage: true
    })
  }

  render(){
    // let msg
    // if(this.state.showMessage){
    //   msg = this.props.message
    // } else {
    //   msg = ""
    // }
    return(
      <div>
        <button onClick={this.showMessage.bind(this)}>Show Text</button>
        <h1>{this.state.showMessage ? this.props.messages : ""}</h1>
      </div>
    )
  }
}

export default Component1
