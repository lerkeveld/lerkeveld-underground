import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import withStyles from '@material-ui/core/styles/withStyles';

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
          <TableCell className={classes.dateCell}>/</TableCell>
          <TableCell className={classes.ordersCell}>{message}</TableCell>
          <TableCell className={classes.priceCell}></TableCell>
          <TableCell className={classes.buttonCell}></TableCell>
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
    submittingAdd: false,
    submittingClear: false,
    selectedOrderDate: {}
  }

  handleAddButton = (orderDate) => () => {
    this.setState({dialogOpen: true, selectedOrderDate: orderDate});
  }

  handleClearButton = (orderDate) => () => {
      this.setState(
          {dialogOpen: false, selectedOrderDate: orderDate, submittingClear: true},
          () => this.doClear()
      );
  }

  doClear = () => {
    api.del({
        path: '/bread/' + this.state.selectedOrderDate.id,
    }).then(data => {
        this.setState(
          {submittingClear: false, selectedOrderDate: {}},
          () => this.props.showMessage('Bestelling verwijderd', this.props.refresh)
        );
    }).catch(error => {
        this.setState(
          {submittingClear: false, selectedOrderDate: {}},
          () => this.props.showMessage(error.message)
        );
    })
  }

  handleAddToOrder = value => {
    this.setState(
        {dialogOpen: false, submittingAdd: true},
        () => this.doAddItem(value)
    );
  }

  doAddItem = value => {
    api.patch({
        path: '/bread/' + this.state.selectedOrderDate.id,
        data: { items: [value] },
    }).then(data => {
        this.setState(
          {submittingAdd: false, selectedOrderDate: {}},
          () => this.props.showMessage('Brood toegevoegd', this.props.refresh)
        );
    }).catch(error => {
        this.setState(
          {submittingAdd: false, selectedOrderDate: {}},
          () => this.props.showMessage(error.message)
        );
    })
  }

  handleDialogChange = (dialogOpen) => () => {
    this.setState({dialogOpen: dialogOpen});
  }

  render () {
    const { classes, orderDates = [], items = [], loading } = this.props;

    return (
        <React.Fragment>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.dateCell}>Week</TableCell>
                <TableCell className={classes.ordersCell}>Bestelling</TableCell>
                <TableCell className={classes.priceCell}>Prijs</TableCell>
                <TableCell className={classes.buttonCell}></TableCell>
                <TableCell className={classes.buttonCell}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? emptyRow(classes) : null}
              {!loading && orderDates.length === 0
                 ? emptyRow(classes, 'Geen bestellingen mogelijk')
                 : null
              }
              {orderDates.map(row => {
                 return (
                   <TableRow key={row.id}>
                     <TableCell className={classes.dateCell}>
                       {utils.formatDate(row.date)}
                     </TableCell>
                     <TableCell className={classes.ordersCell}>
                       { row.is_active
                           ? row.orders.map(order => (
                               <Chip
                                 key={order.id}
                                 label={order.type}
                                 className={classes.chip}
                                 variant="outlined"
                               />
                             ))
                           : "Geen bestelling mogelijk"
                       }
                     </TableCell>
                     <TableCell className={classes.priceCell}>
                       {utils.formatMoney(row.total_price)}
                     </TableCell>
                     <TableCell className={classes.buttonCell}>
                       <IconButton
                         title="Bestel een brood"
                         disabled={
                             this.state.submittingAdd || 
                             this.state.submittingClear || 
                             !row.is_editable
                         }
                         onClick={this.handleAddButton(row)}
                       >
                          { this.state.submittingAdd
                            && row.id === this.state.selectedOrderDate.id
                              ? <CircularProgress size={20} />
                              : <AddIcon fontSize="small" />
                          }
                       </IconButton>
                     </TableCell>
                     <TableCell className={classes.buttonCell}>
                       <IconButton
                         title="Maak bestelling leeg"
                         disabled={
                             this.state.submittingAdd || 
                             this.state.submittingClear || 
                             !row.is_editable || 
                             row.orders.length === 0
                         }
                         onClick={this.handleClearButton(row)}
                       >
                          { this.state.submittingClear
                            && row.id === this.state.selectedOrderDate.id
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
            onSelect={this.handleAddToOrder}
            onClose={this.handleDialogChange(false)}
            items={items}
          />
        </React.Fragment>
    );
  }
}

BreadTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(breadTableStyle)(BreadTable);
