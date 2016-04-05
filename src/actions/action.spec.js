import expect from 'expect'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as actions from './actionCreators'
import { VALIDATE_INPUT } from './actionConsts'

const middlewares = [ thunk ]

/*
 * Creates a mock of Redux store with middleware.
 */
function mockStore(getState, expectedActions, onLastAction) {
  if (!Array.isArray(expectedActions)) {
    throw new Error('expectedActions should be an array of expected actions.')
  }
  if (typeof onLastAction !== 'undefined' && typeof onLastAction !== 'function') {
    throw new Error('onLastAction should either be undefined or function.')
  }

  function mockStoreWithoutMiddleware() {
    return {
      getState() {
        return typeof getState === 'function' ?
          getState() :
          getState
      },

      dispatch(action) {
        const expectedAction = expectedActions.shift()
        expect(action).toEqual(expectedAction)
        if (onLastAction && !expectedActions.length) {
          onLastAction()
        }
        return action
      }
    }
  }

  const mockStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(mockStoreWithoutMiddleware)

  return mockStoreWithMiddleware()
}

describe('ACTIONS: ', () => {
  it('validateInput should return unknown when inputId is unknown', () => {
    var { VALIDATE_INPUT } = require('./actionConsts');
    let expectedVal = {
      type: VALIDATE_INPUT,
      inputId: "firstInput",
      isValid: false,
      validationReport: [{
        title: "unknown",
        details: "unknown element!"
      }]
    }
    expect(actions.validateInput("firstInput", {})).toEqual(expectedVal)
  })
})
