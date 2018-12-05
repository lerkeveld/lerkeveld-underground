import React from 'react';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ActivateForm from './components/ActivateForm';
import LoginForm from './components/LoginForm';
import ResetForm from './components/ResetForm';

import Lerkeveld from './assets/icons/Lerkeveld';


const styles = theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#9b0000'
  },
  icon: {
    display: 'block',
    height: '100px',
    width: '100px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    flex: 1,
    width: '100%',
    maxWidth: '350px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});


class AppAnonymous extends React.Component {

    render() {
      const { classes, setAuthenticated } = this.props;
      return (
          <div className={classes.root}>
              <Paper className={classes.paper}>
                <Lerkeveld className={classes.icon} />
                <Typography variant="h5" align="center" paragraph>
                  Lerkeveld Underground
                </Typography>
                <Switch>
                  <Route exact path="/login" component={() => <LoginForm setAuthenticated={setAuthenticated} />} />
                  <Route exact path="/activate" component={() => <ActivateForm />} />
                  <Route exact path="/reset" component={() => <ResetForm />} />
                  <Redirect to="/login" />
                </Switch>
              </Paper>
          </div>
      )
    }

}

AppAnonymous.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAnonymous);
