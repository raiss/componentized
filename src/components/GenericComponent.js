import React, { Component } from 'react';
import './GenericComponent.scss';

export class GenericComponent extends Component {
  blur(e) {
    console.log("blur from: ", e.target.value);
    this.props.validate(this.props.componentObj.id, e.target.value)
  }

  focus(e) {
    console.log("focus on: ", e.target.value);
  }

  render() {
    const componentObj = this.props.componentObj;
    return (
      <div className="genericcomponent-container">
        <div className="genericcomponent-title">{ componentObj.title || "Title" }</div>
        { this.props.inputComponent ? inputComponent :
          <input
            className="genericcomponent-input"
            type="text"
            required="true"
            onBlur={this.blur.bind(this)}
            onFocus={this.focus.bind(this)}
            placeholder="Enter your rego here."/>
        }
        <div className="genericcomponent-error">error</div>
        <div className="genericcomponent-tooltip">{componentObj.tooltip}</div>
      </div>
    )
  }
}
