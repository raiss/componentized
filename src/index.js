import { render } from 'react-dom';
import React from 'react';

import  { FirstComponent }  from "./FirstComponent";

render(
  <FirstComponent number="100"/>,
  document.getElementById('root')
);
