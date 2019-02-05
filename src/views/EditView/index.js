import React from 'react';
import Link from 'react-router-dom/Link';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ArrowBack from '@material-ui/icons/ArrowBack';

import EditEmailForm from './EditEmailForm';
import EditPasswordForm from './EditPasswordForm';
import EditPrivacyForm from './EditPrivacyForm';

import viewStyle from '../../assets/jss/viewStyle';


class EditView extends React.Component {

  render () {
    const { classes } = this.props;

    const ProfileLink = props => <Link to="/profiel" {...props} />;

    return (
        <main className={classes.mainContent}>
          <div className={classes.toolbar} />
          <Typography variant="h5" className={classes.mainTitle}>
            <IconButton component={ProfileLink}>
              <ArrowBack />
            </IconButton>
            Update Profiel
          </Typography>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={6} md={4}>
              <Switch>
                <Route exact path="/edit/email" component={EditEmailForm} />
                <Route exact path="/edit/password" component={EditPasswordForm} />
                <Route exact path="/edit/privacy" component={EditPrivacyForm} />
                <Redirect to="/" />
              </Switch>
            </Grid>
          </Grid>
        </main>
    );
  }
}

EditView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(EditView);
