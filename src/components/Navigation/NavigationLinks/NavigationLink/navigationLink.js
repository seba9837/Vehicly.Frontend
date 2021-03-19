import React from 'react';

import { NavLink } from 'react-router-dom';
import './navigationLink.css';

const navigationLink = (props) => (
  <li className='navigationLink'>
    <NavLink to={props.navigateTo} exact>
      {props.children}
    </NavLink>
  </li>
);

export default navigationLink;
