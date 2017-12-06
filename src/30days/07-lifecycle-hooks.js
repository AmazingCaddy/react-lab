import React from 'react';
import classnames from 'classnames';

class LifeCycleHooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }

    this.tick = this.tick.bind(this);
  }

  static get defaultProps() {
    return {
      testKey: "haha!"
    };
  }

  componentWillMount() {
    console.log("component will mount");
  }

  render() {
    const classNames = classnames(this.props.className);
    return (
      <div className={classNames}>
        <div>defualt props -> testKey: {this.props.testKey}</div>
        <div>{this.state.date.toLocaleTimeString()}</div>
        <button onClick={this.props.onClick}>{this.props.buttonName}</button>
      </div>
    );
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  componentWillUpdate() {
    //console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    //console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState({ date: new Date() });
  }
}

class Shell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonName: "original - xyz",
      isToggled: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <LifeCycleHooks className={this.props.className} buttonName={this.state.buttonName} onClick={this.handleClick} />
    );
  }

  handleClick() {
    this.setState((prevState) => {
      const isToggled = !prevState.isToggled;
      const buttonName = isToggled ? "new - xyz" : "original - xyz"
      return {
        isToggled: isToggled,
        buttonName: buttonName
      };
    });
  }
}

export { Shell };