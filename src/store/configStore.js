import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import componetized from '../reducers/index.reducer';

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = applyMiddleware(
  loggerMiddleware,
  thunkMiddleware
)(createStore)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(componetized)
}
