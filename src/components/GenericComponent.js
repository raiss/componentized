import React, { Component } from 'react';
import { validateInput } from '../actions/actionCreator';
import './GenericComponent.scss';

export class GenericComponent extends Component {
  blur(e) {
    console.log("blur from: ", e.target.value);
    this.props.validate(validateInput(this.props.componentObj.id, e.target.value))
  }

  focus(e) {
    console.log("focus on: ", e.target.value);
  }

  render() {
    const componentObj = this.props.componentObj;
    return (
      <div className="genericcomponent-container">
        <label for={componentObj.id} className="genericcomponent-title" for="frmEmailA">{ componentObj.label || "Label" }</label>
        { this.props.inputComponent ? inputComponent :
          <input
            id={componentObj.id}
            className="genericcomponent-input"
            type="text"
            required="true"
            onBlur={this.blur.bind(this)}
            onFocus={this.focus.bind(this)}
            placeholder={componentObj.placeholder}/>
        }
        <div className="genericcomponent-error">error</div>
        <div className="genericcomponent-tooltip">{componentObj.tooltip}</div>
      </div>
    )
  }
}
