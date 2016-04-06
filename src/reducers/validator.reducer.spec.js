import expect from 'expect'
import reducer from './validator.reducer'
import { VALIDATE_INPUT } from '../actions/actionConsts';

describe('REDUCER: ', () => {

  const initialState = {
    firstElement: {
      isValid: false,
      validationReport: {
        title: "unknown",
        details: "unknown element!"
      }
    }
  };

  describe('validator.reducer.js', () => {

      it('should return the current state when action type is unknown', () => {
        expect(
          reducer(initialState, {})
        ).toEqual(
          initialState
        )
      })

      it('should add the validation result to state', () => {
        expect(
          reducer(initialState,
            {
              type: VALIDATE_INPUT,
              inputId: "firstElement",
              validationReport: initialState.validationReport
            }
          )
        ).toEqual(
          initialState
        )
      })
    })

})
