import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux'

import App from "./App";
import configStore from './store/configStore.js';

const store = configStore();

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
