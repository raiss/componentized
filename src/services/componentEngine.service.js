import React, { Component } from 'react';

import { GenericComponent } from '../components/GenericComponent';
import { Section } from '../components/Section';

import { validateInput } from '../services/validation.service'

const GENERIC_COMPONENT = "GenericComponent";
const SECTION = "Section";

export const createComponents = function(appObj, options) {
  return appObj.map(comp => {
    let type = comp.type;
    switch (type) {
      case GENERIC_COMPONENT:
        return (<GenericComponent key={comp.id} validator={options.validator} validate={validateInput} componentObj={comp}/>);
        break;
      case SECTION:
        return (<Section key={comp.id} title={comp.title}>{createComponents(comp.children, options.validator)}</Section>);
        break;
      default:
        return <div>Component not found!</div>
    }
  })
}
