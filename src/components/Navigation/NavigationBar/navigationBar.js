import React from 'react';

import NavigationLinks from '../NavigationLinks/navigationLinks';
import './navigationBar.css';

const navigationBar = (props) => (
  <header className='navigationBar'>
    <nav>
      <NavigationLinks />
    </nav>
  </header>
);

export default navigationBar;
