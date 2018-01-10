import React, { Component } from 'react';

class WelcomeText extends React.Component {
  render() {
      return <h1>Goodbye, {this.props.name}</h1>;
    }
}


export default WelcomeText;
