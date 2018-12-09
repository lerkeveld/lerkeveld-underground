import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import KotbarReservationForm from './KotbarReservationForm';
import KotbarReservationTable from './KotbarReservationTable';

import viewStyle from '../../assets/jss/viewStyle';

import data from '../../data.js';
const reservations = data['reservations'];

function KotbarView(props) {
  const { classes } = props;

  return (
      <main className={classes.mainContent}>
        <div className={classes.toolbar} />
        <Typography variant="h5" className={classes.mainTitle}>
          Kotbar
        </Typography>
        <Typography variant="body2" paragraph className={classes.mainSubHeader}>
          Reserveer hier de kotbar!
        </Typography>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle2">
              Nieuwe reservatie
            </Typography>
            <KotbarReservationForm reservations={reservations} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">
              Reservaties
            </Typography>
            <div style={{width: '100%', overflowX: 'auto'}}>
              <KotbarReservationTable reservations={reservations} />
            </div>
          </Grid>
        </Grid>
      </main>
  );
}

KotbarView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(KotbarView);
