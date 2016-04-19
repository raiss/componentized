import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GenericComponent } from './components/GenericComponent';
import { Section } from './components/Section';
import { validateInput } from './services/validation.service'

export class App extends Component {
  render() {
    const { validator } = this.props;

    return (
      <form>
        <Section title="Generic Section">
          <GenericComponent validator={validator}  validate={validateInput} compId="firstName"/>
          <GenericComponent validator={validator}  validate={validateInput} compId="lastName"/>
        </Section>
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
