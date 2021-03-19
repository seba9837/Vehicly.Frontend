import React, { useEffect } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from './containers/Layout/Layout';
import signIn from './containers/Auth/SingIn/signIn';
import signUp from './containers/Auth/SingUp/signUp';

const app = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path='/signin' component={signIn} />
        <Route path='/signup' component={signUp} />
      </Switch>
    </Layout>
  );
};

export default withRouter(app);
