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


class AuthLayout extends React.Component {

    render() {
      const { classes } = this.props;
      return <div className={classes.root}>
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
    }

}

AuthLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AuthLayout);
