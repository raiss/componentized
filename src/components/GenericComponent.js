import React, { Component } from 'react';
import './GenericComponent.scss';

export class GenericComponent extends Component {
  blur(e) {
    console.log("blur from: ", e.target.value);
    this.props.validate(this.props.compId, e.target.value)
  }

  focus(e) {
    console.log("focus on: ", e.target.value);
  }

  render() {
    return (
      <div className="genericcomponent-container">
        <div>{ this.props.title || "Title" }</div>
        { this.props.inputComponent ? inputComponent :
          <input
            type="text"
            required="true"
            onBlur={this.blur.bind(this)}
            onFocus={this.focus.bind(this)}
            placeholder="Enter your rego here."/>
        }
        <div>error</div>
        <div>tooltip</div>
      </div>
    )
  }
}
