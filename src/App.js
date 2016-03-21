import React, { Component } from 'react';
import { FirstComponent } from './components/FirstComponent';
import { GenericComponent } from './components/GenericComponent';

export class App extends Component {
  render() {
    return (
      <div>
        <FirstComponent/>
        <GenericComponent/>
      </div>
    )
  }
}
