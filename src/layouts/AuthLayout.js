import React from 'react';
import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ActivateView from '../views/ActivateView';
import LoginView from '../views/LoginView';
import ResetView from '../views/ResetView';

import Lerkeveld from '../assets/icons/Lerkeveld';

import useAuthLayoutStyles from '../assets/jss/useAuthLayoutStyles';


function AuthLayout(props) {
    const classes = useAuthLayoutStyles();

    return (
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Lerkeveld className={classes.icon} />
            <Typography variant="h5" align="center" paragraph>
              Lerkeveld Underground
            </Typography>
            <Switch>
              <Route exact path="/auth/login" component={LoginView} />
              <Route exact path="/auth/activate" component={ActivateView} />
              <Route exact path="/auth/reset" component={ResetView} />
              <Redirect to="/auth/login" />
            </Switch>
          </Paper>
        </div>
    );
}

export default AuthLayout;
