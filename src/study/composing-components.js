import React from 'react';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class ComposingComponents extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <Welcome name="Wei" />
        <Welcome name="Dinesh" />
        <Welcome name="Wenbin" />
      </div>
    );
  }
}

export { ComposingComponents };