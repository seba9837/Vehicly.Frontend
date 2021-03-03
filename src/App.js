import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import signIn from './containers/Auth/SingIn/signIn';

const app = props => {
  return(
    <Switch>
      <Route path='/signin' component={signIn} />
    </Switch>
  );
}

export default withRouter(app);
