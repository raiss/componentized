
import { VALIDATE_INPUT } from './actionConsts';
import { validateInput as validateInputService } from '../services/validation.service';

export function validateInput(inputId, inputVal) {
  let validatedInput = validateInputService(inputId, inputVal);
  return {
    type: VALIDATE_INPUT,
    inputId,
    isValid: validatedInput.isValid,
    validationReport: validatedInput.validationReport
  }
}
