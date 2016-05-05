import isEmail from 'validator/lib/isEmail';
import { mapObjIndexed, is, reduce, values, concat } from 'ramda';
import { VALIDATION_TYPES } from './validation.const';

export function validateInput(validationTypes, inputVal) {
  var validationArray = mapObjIndexed((val, key, obj) => {
    return {
      validationType: {key, val},
      inputVal: inputVal
    }
  }, validationTypes)

  let validationResults = mapObjIndexed(validateEachType, validationArray);
  console.log("does it work??", JSON.stringify(validationResults));
  return reduce(andReducer, {
        isValid: true,
        validationReport: []
      }, values(validationResults));
};

export function validateEachType(val, key, obj) {
  let validationEngine = {
    [VALIDATION_TYPES.isEmail]: val => {
      return {
        isValid: isEmail(val),
        detail: VALIDATION_TYPES.isEmailMessage
      }
    }
  }

  let validate = validationEngine[val.validationType.key]
  let isItAFunc = isFunction(validate);
  return isItAFunc ? validate(val.inputVal) : {isValid: true, details: "None!"};
}

export function andReducer(acc, val) {
  return {
   isValid: acc.isValid && val.isValid,
   validationReport: concat(
     acc.validationReport,
     val.detail !== undefined ? [val.detail] : [])
  }
}

let isFunction = is(Function);
