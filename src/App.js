import React, { Component } from 'react';
import { connect } from 'react-redux';

import { validateInput } from './services/validation.service'

//*** injected by backend temp engine
import { GenericComponent } from './components/GenericComponent';
import { Section } from './components/Section';

const appObj = [
	  {
      id: "e34fdc",
	    name: "firstName",
      title: "First Name",
      type: "GenericComponent",
	    dependencies: [],
	    validations: []
	  },
	  {
      id: "f2fj3j",
	    name: "lastName",
      title: "Last name",
      type: "GenericComponent",
      tooltip: "Enter your lastname, you might call it surname!",
	    dependencies: [],
	    validations: [
	      {
          isRequered: "true"
        }
	    ]
	  }
]

const renderComponents = (validator) => appObj.map(comp => {
  console.log("test");
  let type = comp.type;
  switch (type) {
    case "GenericComponent":
      return (<GenericComponent validator={validator} key={comp.id} validate={validateInput} componentObj={comp}/>);
      break;
    default:
      return <div>Component not found!</div>
  }
})
//***

export class App extends Component {
  render() {
    const { validator } = this.props;

    return (
      <form>
        <Section title="Generic Section">
          {
            renderComponents(validator)
          }
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
