import render from './app';

render();

if (module.hot) {
  module.hot.accept();
}