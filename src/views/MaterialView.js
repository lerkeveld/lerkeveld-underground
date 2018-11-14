import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import viewStyle from '../assets/jss/viewStyle';
import MaterialReservationCard from '../components/MaterialReservationCard';
import MaterialReservationTable from '../components/MaterialReservationTable';

import data from '../data.js';

function MaterialView(props) {
  const { classes } = props;
  const reservations = data["material-reservations"];
  const names = data["material-items"];

  return (
      <main className={classes.mainContent}>
        <div className={classes.toolbar} />
        <Typography variant="headline" className={classes.mainTitle}>
          Materiaal
        </Typography>
        <Typography variant="body1" paragraph className={classes.mainSubHeader}>
          Reserveer hier materiaal van Lerkeveld!
        </Typography>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} md={4}>
            <MaterialReservationCard reservations={reservations} names={names}/>
          </Grid>
          <Grid item xs={12}>
            <MaterialReservationTable reservations={reservations} />
          </Grid>
        </Grid>
      </main>
  );
}

MaterialView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(MaterialView);
