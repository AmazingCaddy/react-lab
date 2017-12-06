import React from 'react';
import classNames from 'classnames';

function FancyBorder(props) {
  const className = classNames(props.className, 'FancyBorder', 'FancyBorder-' + props.color);
  return (
    <div className={className}>
      {props.children}
    </div>
  );
}

function WelcomeDialog(props) {
  return (
    <FancyBorder className={props.className} color="blue">
      <h3 className="Dialog-title">Welcome</h3>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
}

export { WelcomeDialog };