import React from 'react';
import classNames from 'classnames';

class Welcome extends React.Component {
  render() {
    return <h3>Hello, {this.props.name}</h3>;
  }
}

class ComposingComponents extends React.Component {
  render() {
    const className = classNames(this.props.className, "composing-components-container");
    return (
      <div className={className}>
        <div>Composing Components</div>
        <Welcome name="Wei" />
        <Welcome name="Dinesh" />
        <Welcome name="Wenbin" />
      </div>
    );
  }
}

export { ComposingComponents };