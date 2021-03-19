import React from 'react';

import NavigationBar from '../../components/Navigation/NavigationBar/navigationBar';

const layout = (props) => {
  return (
    <>
      <NavigationBar />
      <main>{props.children}</main>
    </>
  );
};

export default layout;
