import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import viewStyle from '../assets/jss/viewStyle';
import EmailCard from '../components/profileCards/EmailCard';
import HomeTelephoneCard from '../components/profileCards/HomeTelephoneCard';
import LocationCard from '../components/profileCards/LocationCard';
import NameCard from '../components/profileCards/NameCard';
import PasswordCard from '../components/profileCards/PasswordCard';
import PhoneCard from '../components/profileCards/PhoneCard';
import PrivacyCard from '../components/profileCards/PrivacyCard';

class ProfileView extends React.Component {

  render() {
    const { classes } = this.props;
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
}

ProfileView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(ProfileView);
