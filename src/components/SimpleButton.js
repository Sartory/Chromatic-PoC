import React, { Component } from 'react';

class SimpleButton extends React.Component {
  state = {
    counter: 1,
    height: 200,
    width: 200
  };

  handleClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick} style={{height:this.state.height,width:this.state.width}}>
        {this.state.counter}
      </button>
    );
  }
}


export default SimpleButton;
