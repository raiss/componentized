import expect from 'expect';
import { andReducer } from './validation.service';

let validationResult = {
      isValid: true,
      validationReport: "None!"
    }

describe('SERVICE: ', () => {

  describe('validation.service.js', () => {
    describe('andReducer', () => {
      it('should return an object with two key as isValid:Boolean and validationReport:Array', () => {
        let validationDefault = {
          isValid: true,
          validationReport: []
        }
        expect(
          andReducer(validationDefault, validationResult)
        ).toEqual(
          {
            isValid: true,
            validationReport: []
          }
        )
      })
    })
  })
})
