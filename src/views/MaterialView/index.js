import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import viewStyle from '../../assets/jss/viewStyle';
import MaterialReservationForm from './MaterialReservationForm';
import MaterialReservationTable from './MaterialReservationTable';

import data from '../../data.js';
const reservations = data["material-reservations"];
const material = data["material-items"];


function MaterialView(props) {
  const { classes } = props;

  return (
      <main className={classes.mainContent}>
        <div className={classes.toolbar} />
        <Typography variant="h5" className={classes.mainTitle}>
          Materiaal
        </Typography>
        <Typography variant="body2" paragraph className={classes.mainSubHeader}>
          Reserveer hier materiaal van Lerkeveld!
        </Typography>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="subtitle2">
              Nieuwe reservatie
            </Typography>
            <MaterialReservationForm reservations={reservations} material={material}/>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2">
              Reservaties
            </Typography>
            <div style={{width: '100%', overflowX: 'auto'}}>
              <MaterialReservationTable reservations={reservations} />
            </div>
          </Grid>
        </Grid>
      </main>
  );
}

MaterialView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(MaterialView);
