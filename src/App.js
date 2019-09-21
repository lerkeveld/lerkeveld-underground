import React, {useEffect} from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';

import * as api from './api';


function App(props) {

    useEffect(() => {
        // remove progress
        const node = document.getElementById('progress')
        if (node) {
          node.classList.add('available');
          setTimeout(() => {node.remove();}, 2000);
        }
    }, []);

    useEffect(() => {
        let authenticated = api.hasCredentials();

        // redirect based on authenticated state of hasCredentials
        if (authenticated) {
            if (props.location.pathname.startsWith('/auth'))
                props.history.replace('/');
        } else {
            if (!props.location.pathname.startsWith('/auth')) {
                props.history.replace({
                    pathname: '/auth/login',
                    state: {referrer: props.location}
                });
            }
        }
    }, [props.location, props.history]);

    return (
        <Switch>
          <Route path="/auth" component={AuthLayout} />
          <Route path="/" component={MainLayout} />
        </Switch>
    );
}

export default withRouter(App);
