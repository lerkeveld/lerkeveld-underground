import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';

import * as api from './api';


class App extends React.Component {

  componentDidMount() {
    api.hasCredentials().then((authenticated) => {
      // redirect based on authenticated state of hasCredentials
      if (authenticated) {
        if (this.props.location.pathname.startsWith('/auth'))
          this.props.history.replace('/');
      } else {
        if (!this.props.location.pathname.startsWith('/auth')) {
          this.props.history.replace({
              pathname: '/auth/login',
              state: {referrer: this.props.location}
          });
        }
      }

      // remove progress
      const node = document.getElementById('progress')
      if (node) {
        node.classList.add('available');
        setTimeout(() => {node.remove();}, 2000);
      }
    });
  }

  render() {
    return (
        <Switch>
          <Route path="/auth" component={AuthLayout} />
          <Route path="/" component={MainLayout} />
        </Switch>
    );
  }
}

export default withRouter(App);
