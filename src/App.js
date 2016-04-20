import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createComponents } from './services/componentEngine.service'
import { appObj } from './mocks/componentObject'

export class App extends Component {
  render() {
    const { validator } = this.props;

    return (
      <form>
        { createComponents(appObj, validator) }
      </form>
    )
  }
}

function select(state) {
  return {
    validator: state.validatorReducer
  }
}

export default connect(select)(App)
