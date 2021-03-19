import React from 'react';

import './button.css';

const Button = (props) => (
  <button onClick={props.clicked} className='button'>
    {props.children}
  </button>
);

export default Button;
