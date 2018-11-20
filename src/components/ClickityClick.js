// Code ClickityClick Component Here
import React, {Component} from 'react';

export default class ClickityClick extends Component {
  constructor(){
    super();
    this.state = {
      hasBeenClicked: false
    }
  }
  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked))
  }
  render(){
    return (

      <button onClick={this.handleClick}>Click Me and Die</button>
    )
  }
}
