import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import LockIcon from '@material-ui/icons/Lock';

import AddBreadDialog from './AddBreadDialog';

import breadTableStyle from '../../assets/jss/breadTableStyle';
import * as api from '../../api';
import * as utils from '../../utils';

const emptyRow = (classes, message) => {
    return (
        <TableRow>
          <TableCell className={classes.dateCell}>{message}</TableCell>
          <TableCell className={classes.descriptionCell}></TableCell>
          <TableCell className={classes.buttonCell}>
            <IconButton title="Lock" disabled>
              <LockIcon fontSize="small" />
            </IconButton>
          </TableCell>
        </TableRow>
    )
};


class BreadTable extends React.Component {

  state = {
    dialogOpen: false,
    submitting: false,
    order: {}
  }

  handleButtonClick = (order) => () => {
    this.setState({dialogOpen: true, order: order});
  }

  handleClearOrder = (order) => () => {
      this.setState({dialogOpen: false, order: order},
          () => this.doClear
      );
  }

  doClear = () => {
    api.put({
        path: '/bread/' + this.state.order.id,
    }).then(data => {
        this.setState(
          {submitting: false, order: {}},
          () => this.props.showMessage('Bestelling verwijderd', this.props.refresh)
        );
    }).catch(error => {
        this.setState(
          {submitting: false, order: {}},
          () => this.props.showMessage(error.message)
        );
    })
  }

  handleDialogAccept = () => {
    this.setState(
        {dialogOpen: false, submitting: true},
        () => this.props.closeSnackbar(this.doDelete)
    );
  }

  handleDialogChange = (dialogOpen) => () => {
    this.setState({dialogOpen: dialogOpen});
  }

  render () {
    const { classes, orders, loading } = this.props;

    return (
        <React.Fragment>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.dateCell}>Week</TableCell>
                <TableCell className={classes.ordersCell}>Bestelling</TableCell>
                <TableCell className={classes.buttonCell}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? emptyRow(classes) : null}
              {!loading && orders.length === 0 ? emptyRow(classes, 'Geen bestellingen mogelijk') : null}
              {orders.map(row => {
                 return (
                   <TableRow key={row.id}>
                     <TableCell className={classes.dateCell}>
                       {utils.formatDate(row.date)}
                     </TableCell>
                     <TableCell className={classes.ordersCell}>
                       {row.items.join(", ")}
                     </TableCell>
                     <TableCell className={classes.buttonCell}>
                        <IconButton
                           title="Voeg brood toe"
                           disabled={this.state.submitting}
                           onClick={this.handleButtonClick(row)}
                        >
                           { this.state.submitting && row.id === this.state.order.id
                               ? <CircularProgress size={20} />
                               : <AddIcon fontSize="small" />
                           }
                        </IconButton>
                        <IconButton
                           title="Verwijder bestelling"
                           disabled={this.state.submitting}
                           onClick={this.handleClearOrder(row)}
                        >
                           { this.state.submitting && row.id === this.state.order.id
                               ? <CircularProgress size={20} />
                               : <ClearIcon fontSize="small" />
                           }
                        </IconButton>
                     </TableCell>
                   </TableRow>
                 );
              })}
            </TableBody>
          </Table>
          <AddBreadDialog 
            open={this.state.dialogOpen}
            onAccept={this.handleDialogAccept}
            onClose={this.handleDialogChange(false)}
            order={this.state.order}
          />
        </React.Fragment>
    );
  }
}

BreadTable.propTypes = {
  classes: PropTypes.object.isRequired,
  orders: PropTypes.array.isRequired,
};

BreadTable.defaultProps = {
  orders: []
}

export default withStyles(breadTableStyle)(BreadTable);

