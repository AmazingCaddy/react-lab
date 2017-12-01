import React from 'react';
import classNames from 'classnames';

class HelloWorld extends React.Component {
  render() {
    const className = classNames(this.props.className, "hello-world-class-container");
    return (
      <div className={className}>
        <div>hello world - by class</div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

function HelloWorldFunc(props) {
  const className = classNames(props.className, "hello-world-function-container");
  return (
    <div className={className}>
      <div>hello world - by function</div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export { HelloWorld, HelloWorldFunc };