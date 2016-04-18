import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FirstComponent } from './components/FirstComponent';
import { GenericComponent } from './components/GenericComponent';

export class App extends Component {
  render() {
    const { validator } = this.props;

    return (
      <div>
        <FirstComponent/>
        <GenericComponent validator={validator}/>
      </div>
    )
  }
}

function select(state) {
  return {
    validator: state.validatorReducer
  }
}

export default connect(select)(App)
