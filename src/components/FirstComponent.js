import React, { Component } from 'react';

export class FirstComponent extends Component {
  blur(e) {
    console.log("blur from: ", e.target.value);
  }

  focus(e) {
    console.log("focus on: ", e.target.value);
  }

  render() {
    return (
      <input
        type="text"
        onBlur={this.blur.bind(this)}
        onFocus={this.focus.bind(this)}
        placeholder="Enter your rego here."/>
    )
  }
}
