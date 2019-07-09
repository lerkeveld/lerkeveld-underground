import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CloseableSnackbar from '../../components/CloseableSnackbar';
import LoadingSnackbar from '../../components/LoadingSnackbar';

import viewStyle from '../../assets/jss/viewStyle';
import MaterialReservationForm from './MaterialReservationForm';
import MaterialReservationTable from './MaterialReservationTable';

import * as api from '../../api';

class MaterialView extends React.Component {

  state = {
    items: [],
    reservations: [],
    fetchingItems: true,
    fetchingReservations: true,
    disableFormItems: true,
    disableFormReservations: true,
    snackbarOpen: false,
    messageInfo: {}
  }

  showMessage = (message, callback) => {
      this.setState({
          snackbarOpen: true,
          messageInfo: {
              key: new Date().getTime(),
              message: message
          }
      }, callback);
  }

  handleSnackbarClose = () => {
      this.closeSnackbar();
  }

  closeSnackbar = (callback) => {
      this.setState({snackbarOpen: false}, callback);
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
        const sorted = reservations.sort((r1, r2) => {
            if (r1.date > r2.date) {return 1;}
            if (r1.date < r2.date) {return -1;}
            return 0;
        });
        this.setState({
            reservations: sorted,
            disableFormReservations: false,
            fetchingReservations: false
        });
    }).catch(error => {
        if (error === null) return;
        this.setState(
            {fetchingReservations: false},
            () => this.showMessage(error.message)
        );
    })
  }

  fetchItems = () => {
    return api.get({
        path: '/materiaal/type'
    }).then(data => {
        const sortedItems = data.items.sort((i1, i2) => {
            if (i1.name > i2.name) {return 1;}
            if (i1.name < i2.name) {return -1;}
            return 0;
        });
        this.setState({
            items: sortedItems,
            disableFormItems: false,
            fetchingItems: false
        });
    }).catch(error => {
        if (error === null) return;
        this.setState(
            {fetchingItems: false},
            () => this.showMessage(error.message)
        );
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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="subtitle2">
                Nieuwe reservatie
              </Typography>
              <MaterialReservationForm
                reservations={this.state.reservations}
                items={this.state.items}
                refresh={this.fetchReservations}
                disabled={this.state.disableFormReservations || this.state.disableFormItems}
                showMessage={this.showMessage}
                closeSnackbar={this.closeSnackbar}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                Reservaties
              </Typography>
              <div style={{width: '100%', overflowX: 'auto'}}>
                <MaterialReservationTable
                  reservations={this.state.reservations}
                  refresh={this.fetchReservations}
                  loading={this.state.fetchingReservations}
                  showMessage={this.showMessage}
                  closeSnackbar={this.closeSnackbar}
                />
              </div>
            </Grid>
          </Grid>
          { this.state.fetchingReservations || this.state.fetchingItems
              ? <LoadingSnackbar open />
              : <CloseableSnackbar
                  key={this.state.messageInfo.key}
                  message={this.state.messageInfo.message}
                  open={this.state.snackbarOpen}
                  onClose={this.handleSnackbarClose}
                />
          }
        </main>
    );
  }
}

MaterialView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(MaterialView);
