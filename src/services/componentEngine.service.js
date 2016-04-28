import React, { Component } from 'react';

import { GenericComponent } from '../components/GenericComponent';
import { Section } from '../components/Section';
import { Cta } from '../components/cta';

import { validateInput } from '../services/validation.service'

const GENERIC_COMPONENT = "GenericComponent";
const SECTION = "Section";
const CTA = "Cta";

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
      case CTA:
        return (<Cta key={comp.id} title={comp.title}/>);
        break;
      default:
        return <div>Component not found!</div>
    }
  })
}
