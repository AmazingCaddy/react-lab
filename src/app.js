import React from 'react';
import ReactDOM from 'react-dom';

import { HelloWorld, HelloWorldFunc } from './study/hello-world';
import { Clock } from './study/clock';
import { ComposingComponents } from './study/composing-components';
import { LoginControl } from './study/element-variables';
import { Page } from './study/preventing-component-from-rendering';

class Element extends React.Component {
  render() {
    const rowContainerClass = 'row-container';

    const rows = [
      HelloWorld,
      HelloWorldFunc,
      Clock,
      ComposingComponents,
      LoginControl,
      Page
    ];

    const inner = rows.map((Value, index) => {
      return <Value className={rowContainerClass} key={index} />;
    });

    return (
      <div className={this.props.className}>
        {inner}
      </div>
    );
  }
}

function render() {
  ReactDOM.render(<Element className={'container'} />, document.getElementById('app'));
}

export default render;