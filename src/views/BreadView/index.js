import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CloseableSnackbar from '../../components/CloseableSnackbar';
import LoadingSnackbar from '../../components/LoadingSnackbar';

import viewStyle from '../../assets/jss/viewStyle';
import BreadTable from './BreadTable';

import * as api from '../../api';


class BreadView extends React.Component {

  state = {
    items: [],
    orderDates: [],
    fetchingItems: true,
    fetchingOrderDates: true,
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

  fetchOrderDates = () => {
    return api.get({
        path: '/bread/'
    }).then(data => {
        const orderDates = data['order_dates'].map(orderDate => {
            return Object.assign(
                {},
                orderDate,
                {date: new Date(orderDate.date)}
            )
        });
        const sorted = orderDates.sort((r1, r2) => {
            if (r1.date > r2.date) {return 1;}
            if (r1.date < r2.date) {return -1;}
            return 0;
        });
        this.setState({
            orderDates: sorted,
            fetchingOrderDates: false
        });
    }).catch(error => {
        this.setState(
            {fetchingOrderDates: false},
            () => this.showMessage(error.message)
        );
    })
  }

  fetchItems = () => {
    return api.get({
        path: '/bread/type'
    }).then(data => {
        this.setState({
            items: data.items,
            fetchingItems: false
        });
    }).catch(error => {
        this.setState(
            {fetchingItems: false},
            () => this.showMessage(error.message)
        );
    })
  }

  refresh = () => {
    this.fetchOrderDates();
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
              Brood en Melk
          </Typography>
          <Typography variant="body2" paragraph className={classes.mainSubHeader}>
            Bestel hier wekelijks je brood!
          </Typography>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                Reservaties
              </Typography>
              <div style={{width: '100%', overflowX: 'auto'}}>
                <BreadTable
                  orderDates={this.state.orderDates}
                  items={this.state.items}
                  refresh={this.fetchOrderDates}
                  loading={this.state.fetchingOrderDates || this.state.fetchingItems}
                  showMessage={this.showMessage}
                  closeSnackbar={this.closeSnackbar}
                />
              </div>
            </Grid>
          </Grid>
          { this.state.fetchingOrderDates || this.state.fetchingItems
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


BreadView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(BreadView);
