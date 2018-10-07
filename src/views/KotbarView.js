import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import viewStyle from '../assets/jss/viewStyle';
import KotbarReservationCard from '../components/KotbarReservationCard';
import KotbarReservationTable from '../components/KotbarReservationTable';

import data from '../data.js';

function KotbarView(props) {
  const { classes } = props;
  const reservations = data['reservations'];

  return (
      <main className={classes.mainContent}>
        <div className={classes.toolbar} />
        <Typography variant="headline" className={classes.mainTitle}>
          Kotbar
        </Typography>
        <Typography variant="body1" paragraph className={classes.mainSubHeader}>
          Reserveer hier de kotbar!
        </Typography>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} md={4}>
            <KotbarReservationCard reservations={reservations} />
          </Grid>
          <Grid item xs={12}>
            <KotbarReservationTable reservations={reservations} />
          </Grid>
        </Grid>
      </main>
  );
}

KotbarView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(KotbarView);
