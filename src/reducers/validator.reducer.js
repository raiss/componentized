"use strict";
import { VALIDATE_INPUT } from '../actions/action.const';
import { merge } from 'ramda';

const initialState = {};

export default function validatorReducer(state = initialState, action) {
  switch (action.type) {
    case VALIDATE_INPUT:
      return merge(state, {
            [action.inputId]: {
              isValid: action.isValid,
              validationReport: action.validationReport
            }
          })
    default:
      return state;
  }
}
