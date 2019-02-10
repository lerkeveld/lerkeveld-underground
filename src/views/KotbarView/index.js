import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CloseableSnackbar from '../../components/CloseableSnackbar';
import LoadingSnackbar from '../../components/LoadingSnackbar';

import KotbarReservationForm from './KotbarReservationForm';
import KotbarReservationTable from './KotbarReservationTable';

import viewStyle from '../../assets/jss/viewStyle';
import * as api from '../../api';


class KotbarView extends React.Component {

  state = {
    reservations: [],
    fetching: true,
    disableForm: true,
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
        path: '/kotbar/'
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
            disableForm: false,
            fetching: false
        });
    }).catch(error => {
        this.setState(
            {fetching: false},
            () => this.showMessage(error.message)
        );
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
                refresh={this.fetchReservations}
                disabled={this.state.disableForm}
                showMessage={this.showMessage}
                closeSnackbar={this.closeSnackbar}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                Reservaties
              </Typography>
              <div style={{width: '100%', overflowX: 'auto'}}>
                <KotbarReservationTable
                  reservations={this.state.reservations}
                  refresh={this.fetchReservations}
                  loading={this.state.fetching}
                  showMessage={this.showMessage}
                  closeSnackbar={this.closeSnackbar}
                />
              </div>
            </Grid>
          </Grid>
          { this.state.fetching
              ? <LoadingSnackbar open={this.state.fetching} />
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

KotbarView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(KotbarView);
