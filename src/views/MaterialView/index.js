import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import viewStyle from '../../assets/jss/viewStyle';
import MaterialReservationForm from './MaterialReservationForm';
import MaterialReservationTable from './MaterialReservationTable';

import * as api from '../../api';

class MaterialView extends React.Component {

  state = {
    items: [],
    reservations: []
  }

  fetchReservations = () => {
    return api.get({
        path: '/materiaal/'
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

  fetchItems = () => {
    return api.get({
        path: '/materiaal/type'
    }).then(data => {
        const items = data.items.map(item => item.name);
        this.setState({items: items});
    })
  }

  refresh = () => {
    this.fetchReservations();
    this.fetchItems();
  }

  componentDidMount() {
    this.refresh();
  }

  render() {
    const { classes } = this.props;

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
              <MaterialReservationForm
                refresh={this.refresh.bind(this)}
                reservations={this.state.reservations}
                items={this.state.items}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                Reservaties
              </Typography>
              <div style={{width: '100%', overflowX: 'auto'}}>
                <MaterialReservationTable
                  reservations={this.state.reservations}
                />
              </div>
            </Grid>
          </Grid>
        </main>
    );
  }
}

MaterialView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(MaterialView);
