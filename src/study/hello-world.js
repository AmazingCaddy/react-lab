import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <h1>Hello, World!</h1>
        <h3>by Class</h3>
      </div>
    );
  }
}

function HelloWorldFunc(props) {
  return (
    <div className={props.className}>
      <h1>Hello, World!</h1>
      <h3>by Function</h3>
    </div>
  );
}

export { HelloWorld, HelloWorldFunc };