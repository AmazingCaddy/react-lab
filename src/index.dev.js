import render from './app';
import './index.css';

render();

if (module.hot) {
  module.hot.accept();
}