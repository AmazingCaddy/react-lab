import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'ReactLaboratory';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}