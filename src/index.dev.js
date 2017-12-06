import Render from './app';
import days from './30days';

import './index.scss';

Render();
days();

if (module.hot) {
  module.hot.accept();
}