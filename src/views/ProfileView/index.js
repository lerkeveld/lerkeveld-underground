import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import EmailCard from './cards/EmailCard';
import HomeTelephoneCard from './cards/HomeTelephoneCard';
import LocationCard from './cards/LocationCard';
import NameCard from './cards/NameCard';
import PasswordCard from './cards/PasswordCard';
import PhoneCard from './cards/PhoneCard';
import PrivacyCard from './cards/PrivacyCard';

import viewStyle from '../../assets/jss/viewStyle';


function ProfileView(props) {
  const { classes } = props;

  return (
      <main className={classes.mainContent}>
        <div className={classes.toolbar} />
        <Typography variant="h5" className={classes.mainTitle}>
          Profiel
        </Typography>
        <Typography variant="body2" paragraph className={classes.mainSubHeader}>
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

ProfileView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(ProfileView);
