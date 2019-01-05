import React from 'react';
import './Button.css';

const Button = props => {
  const { centered, classes, clickHandler, text } = props;
  return (
    <button
      onClick={clickHandler}
      className={classes}
      style={{ margin: centered ? '.5rem auto' : null }}
    >
      <p style={{ margin: 0 }}>{text}</p>
    </button>
  );
}

export default Button;
