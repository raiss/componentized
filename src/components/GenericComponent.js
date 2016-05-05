import React, { Component } from 'react';
import { validateInput as validateInputActionCreator } from '../actions/actionCreator';
import { validateInput as validateInputService} from '../services/validation.service';
import './GenericComponent.scss';

export class GenericComponent extends Component {
  blur(e) {
    let compObj = this.props.componentObj;
    console.log("blur from: ", e.target.value, compObj.validations);
    let validationObj = validateInputService(compObj.validations, e.target.value);
    console.log(validationObj);
    let action = validateInputActionCreator(compObj.id, validationObj, e.target.value);


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
