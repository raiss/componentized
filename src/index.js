import { render } from 'react-dom';
import React from 'react';

import  { Counter }  from "./Counter";

render(
  <Counter number="100"/>,
  document.getElementById('root')
);
