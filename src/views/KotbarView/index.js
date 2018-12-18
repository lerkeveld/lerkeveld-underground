import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import KotbarReservationForm from './KotbarReservationForm';
import KotbarReservationTable from './KotbarReservationTable';

import viewStyle from '../../assets/jss/viewStyle';
import * as api from '../../api';


class KotbarView extends React.Component {

  state = {
    reservations: []
  }

  fetchReservations = () => {
    return api.get({
        path: '/kotbar/'
    }).then(data => {
        const reservations = data.reservations.map(reservation => {
            return Object.assign(
                {},
                reservation,
                {date: new Date(reservation.date)}
            )
        });
        this.setState({reservations: reservations});
    })
  }

  componentDidMount() {
    this.fetchReservations();
  }

  render () {
    const { classes } = this.props;

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
              <KotbarReservationForm
                reservations={this.state.reservations}
                refresh={this.fetchReservations.bind(this)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                Reservaties
              </Typography>
              <div style={{width: '100%', overflowX: 'auto'}}>
                <KotbarReservationTable reservations={this.state.reservations} />
              </div>
            </Grid>
          </Grid>
        </main>
    );
  }
}

KotbarView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(KotbarView);
