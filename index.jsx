import React from 'react';
import { render } from 'react-dom';

import Application from './src/app.jsx';

render(<Application/>, document.querySelector('#root'));

document.querySelector('html').classList.add('pretty');