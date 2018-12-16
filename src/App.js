import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';

import * as api from './api';


class App extends React.Component {

  refreshToken() {
    return api.post({
        path: '/auth/refresh',
        refresh: true
    }).then(data => {
        window.localStorage.setItem('a-csrf-token', data['a-csrf-token']);
        return Promise.resolve(true)
    }).catch(() => Promise.resolve(false))
  }

  componentDidMount() {
    this.refreshToken().then((authenticated) => {
      // redirect based on authenticated state of refreshToken
      if (authenticated) {
        if (this.props.location.pathname.startsWith('/auth'))
          this.props.history.push('/');
      } else {
        if (!this.props.location.pathname.startsWith('/auth')) {
          this.props.history.push({
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
