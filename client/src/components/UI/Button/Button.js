import React from 'react';
import './Button.css';

const Button = props => {
  const { classes, clickHandler, text } = props;
  return (
    <button
      onClick={clickHandler}
      className={classes}
    >
      <p style={{ margin: 0 }}>{text}</p>
    </button>
  );
}

export default Button;
