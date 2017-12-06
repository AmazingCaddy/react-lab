import React from 'react';
import ReactDOM from 'react-dom';

import { Shell } from './30days/07-lifecycle-hooks';
import { Timeline } from './30days/04-complex-components';
import { Timeline as TimelineDataDriven } from './30days/05-data-driven';


class Element extends React.Component {
  render() {
    const rowContainerClass = 'row-container';

    const rows = [
      Shell,
      Timeline,
      TimelineDataDriven
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
  ReactDOM.render(<Element className={'container demo'} />, document.getElementById('30days'));
}

export default render;