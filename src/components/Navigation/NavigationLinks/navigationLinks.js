import React from 'react';

import NavigationLink from './NavigationLink/navigationLink';
import './navigationLinks.css';

const navigationLinks = (props) => (
  <ul className='navigationList'>
    <NavigationLink navigateTo='/signin'>Sign in</NavigationLink>
    <NavigationLink navigateTo='/signup'>Sign up</NavigationLink>
  </ul>
);

export default navigationLinks;
