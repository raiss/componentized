import { VALIDATE_INPUT } from './action.const';

export function validateInput(inputId, validationObj, inputVal) {
  return {
    type: VALIDATE_INPUT,
    inputId,
    isValid: validationObj.isValid,
    validationReport: validationObj.validationReport
  }
}
