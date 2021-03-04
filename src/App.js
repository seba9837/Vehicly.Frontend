import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import signIn from './containers/Auth/SingIn/signIn';
import signUp from './containers/Auth/SingUp/signUp';

const app = props => {
  return (
    <Switch>
      <Route path='/signin' component={signIn} />
      <Route path='/signup' component={signUp} />
    </Switch>
  );
}

export default withRouter(app);
