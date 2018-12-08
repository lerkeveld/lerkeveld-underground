import React from 'react';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ActivateView from '../views/ActivateView';
import LoginView from '../views/LoginView';
import ResetView from '../views/ResetView';

import Lerkeveld from '../assets/icons/Lerkeveld';

import authLayoutStyle from '../assets/jss/authLayoutStyle';


function AuthLayout(props) {
  const { classes } = props;

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

AuthLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(authLayoutStyle)(AuthLayout);
