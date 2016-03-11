import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export class FirstComponent extends Component {
  blur(e) {
    console.log("test: ", e.target.value);
  }

  render() {
    return (
      <input type="text" onBlur={this.blur.bind(this)} placeholder="Enter your rego here."></input>
    )
  }
}
