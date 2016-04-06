import expect from 'expect'
import reducer from './validator.reducer'
import * as types from './../actions/actionConsts'

describe('REDUCER: ', () => {

  const initialState = [{}];

  describe('validator.reducer.js', () => {

      it('should return the initial state', () => {
        expect(
          reducer(initialState, {})
        ).toEqual(
          initialState
        )
      })
    })

})
