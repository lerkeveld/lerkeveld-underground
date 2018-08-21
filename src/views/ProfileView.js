import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

import viewStyle from '../assets/jss/viewStyle';

import {
    NameCard,
    EmailCard,
    PasswordCard,
    LocationCard,
    PhoneCard,
    HomeTelephoneCard,
    PrivacyCard,
} from '../components/profileCards';

class ProfileView extends React.Component {

  render() {
    const { classes } = this.props;
    return (
        <main className={classes.mainContent}>
          <div className={classes.toolbar} />
          <Typography variant="headline" className={classes.mainTitle}>
            Profiel
          </Typography>
          <Typography variant="body1" paragraph className={classes.mainSubHeader}>
            Contacteer Lerkeveld IT voor niet-aanpasbare velden.
          </Typography>
          <Grid container spacing={16}>
            <Grid item xs={12} md={4}><NameCard /></Grid>
            <Grid item xs={12} md={4}><EmailCard /></Grid>
            <Grid item xs={12} md={4}><PasswordCard /></Grid>
            <Grid item xs={12} md={4}><LocationCard /></Grid>
            <Grid item xs={12} md={4}><PhoneCard /></Grid>
            <Grid item xs={12} md={4}><HomeTelephoneCard /></Grid>
            <Grid item xs={12} md={4}><PrivacyCard /></Grid>
          </Grid>
        </main>
    );
  }
}

ProfileView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(ProfileView);
