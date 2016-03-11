import React, { Component } from 'react';
import { FirstComponent } from './components/FirstComponent';

export class App extends Component {
  render() {
    return (
      <div>
        <FirstComponent/>
        <FirstComponent/>
        <FirstComponent/>
        <FirstComponent/>
      </div>
    )
  }
}
