import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';

class App extends React.Component {

  // fake refreshToken Promise
  refreshToken() {
    const authenticated = false;
    return new Promise(resolve => setTimeout(() => resolve(authenticated), 2000))
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
