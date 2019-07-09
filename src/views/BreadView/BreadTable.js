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
import AddIconOutlined from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';
import LockIcon from '@material-ui/icons/Lock';

import AddBreadDialog from './AddBreadDialog';

import breadTableStyle from '../../assets/jss/breadTableStyle';
import * as api from '../../api';
import * as utils from '../../utils';

const emptyRow = (classes, prefix, message) => {
    return (
        <TableRow>
          <TableCell className={classes.dateCell}>{prefix}</TableCell>
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
    selectedOrderDate: {},
    selectedGlobal: false
  }

  handleDialogChange = (dialogOpen) => () => {
    this.setState({dialogOpen: dialogOpen});
  }

  handleAddButton = (orderDate, global) => () => {
    this.setState({
        dialogOpen: true,
        selectedOrderDate: orderDate,
        selectedGlobal: global
    });
  }

  handleAddToOrder = value => {
    this.setState(
        {dialogOpen: false, submittingAdd: true},
        () => this.doAddItem(value)
    );
  }

  handleClearButton = (orderDate, global) => () => {
    this.setState(
        {
            selectedOrderDate: orderDate,
            selectedGlobal: global,
            submittingClear: true
        },
        () => this.doClear()
    );
  }

  doClear = () => {
    const path = this.state.selectedGlobal
      ? 'all'
      : this.state.selectedOrderDate.id;
    if (path === undefined)
      return;
    api.del({
        path: '/bread/' + path
    }).then(data => {
        this.setState(
          {submittingClear: false},
          () => this.props.showMessage('Bestelling verwijderd', this.props.refresh)
        );
    }).catch(error => {
        if (error === null) return;
        this.setState(
          {submittingClear: false},
          () => this.props.showMessage(error.message)
        );
    })
  }

  doAddItem = value => {
    const path = this.state.selectedGlobal
      ? 'all'
      : this.state.selectedOrderDate.id;
    if (path === undefined)
      return;
    api.patch({
        path: '/bread/' + path,
        data: { items: [value] }
    }).then(data => {
        this.setState(
          {submittingAdd: false},
          () => this.props.showMessage('Brood toegevoegd', this.props.refresh)
        );
    }).catch(error => {
        if (error === null) return;
        this.setState(
          {submittingAdd: false},
          () => this.props.showMessage(error.message)
        );
    })
  }

  render () {
    const { classes, orderDates = [], items = [], loading } = this.props;

    return (
        <React.Fragment>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell className={classes.dateCell}>Week</TableCell>
                <TableCell className={classes.ordersCell}>Bestelling</TableCell>
                <TableCell className={classes.priceCell}>Prijs</TableCell>
                <TableCell className={classes.buttonCell}>
                  <IconButton
                    title="Bestel voor alle weken"
                    disabled={
                        loading ||
                        orderDates.length === 0 ||
                        this.state.submittingAdd || 
                        this.state.submittingClear
                    }
                    onClick={this.handleAddButton({}, true)}
                  >
                    { this.state.submittingAdd && this.state.selectedGlobal
                        ? <CircularProgress size={20} />
                        : <AddIconOutlined fontSize="small" />
                    }
                  </IconButton>
                </TableCell>
                <TableCell className={classes.buttonCell}>
                  <IconButton
                    title="Maak alle bestellingen leeg"
                    disabled={
                        loading ||
                        orderDates.length === 0 ||
                        this.state.submittingAdd || 
                        this.state.submittingClear
                    }
                    onClick={this.handleClearButton({}, true)}
                  >
                    { this.state.submittingClear && this.state.selectedGlobal
                        ? <CircularProgress size={20} />
                        : <DeleteIcon fontSize="small" />
                    }
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading && orderDates.length === 0 ? emptyRow(classes) : null}
              {!loading && orderDates.length === 0
                 ? emptyRow(classes, '/', 'Geen bestellingen mogelijk')
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
                             loading ||
                             this.state.submittingAdd || 
                             this.state.submittingClear || 
                             !row.is_editable
                         }
                         onClick={this.handleAddButton(row, false)}
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
                             loading ||
                             this.state.submittingAdd || 
                             this.state.submittingClear || 
                             !row.is_editable || 
                             row.orders.length === 0
                         }
                         onClick={this.handleClearButton(row, false)}
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
            selectedOrderDate={this.state.selectedOrderDate}
            selectedGlobal={this.state.selectedGlobal}
          />
        </React.Fragment>
    );
  }
}

BreadTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(breadTableStyle)(BreadTable);
