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
          <TableCell className={classes.descriptionCell} colSpan={2}>{message}</TableCell>
          <TableCell className={classes.buttonsCell}>
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
    selectedOrder: {},
    items: {},
  }

  handleAddClick = (order) => () => {
    this.setState({dialogOpen: true, selectedOrder: order});
  }

  handleClearOrder = (order) => () => {
      this.setState(
          {dialogOpen: false, selectedOrder: order},
          () => this.doClear()
      );
  }

  doClear = () => {
    api.del({
        path: '/bread/' + this.state.selectedOrder.id,
    }).then(data => {
        this.setState(
          {submitting: false, selectedOrder: {}},
          () => this.props.showMessage('Bestelling verwijderd', this.props.refresh)
        );
    }).catch(error => {
        this.setState(
          {submitting: false, selectedOrder: {}},
          () => this.props.showMessage(error.message)
        );
    })
  }

  handleAddToOrder = value => {
    this.setState(
        {dialogOpen: false, submitting: true},
        () => this.doAddItem(value)
    );
  }

  doAddItem = value => {
    api.patch({
        path: '/bread/' + this.state.selectedOrder.id,
        data: { items: [value] },
    }).then(data => {
        this.setState(
          {submitting: false, selectedOrder: {}},
          () => this.props.showMessage('Brood toegevoegd', this.props.refresh)
        );
    }).catch(error => {
        this.setState(
          {submitting: false, selectedOrder: {}},
          () => this.props.showMessage(error.message)
        );
    })
  }

  handleDialogChange = (dialogOpen) => () => {
    this.setState({dialogOpen: dialogOpen});
  }

  render () {
    const { classes, orders, loading, items } = this.props;

    return (
        <React.Fragment>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.dateCell}>Week</TableCell>
                <TableCell className={classes.ordersCell}>Bestelling</TableCell>
                <TableCell className={classes.buttonsCell}></TableCell>
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
                         {row.items.map(item => (
                             <Chip label={item.name}
                                className={classes.chip}
                                variant="outlined" />))}
                         {/*  {row.items.map(item => item.price/100).reduce((a,b) => a + b, 0)} */}
                     </TableCell>
                     <TableCell className={classes.buttonsCell}>
                        <IconButton
                           title="Voeg brood toe"
                           disabled={this.state.submitting || !row.is_editable}
                           onClick={this.handleAddClick(row)}
                        >
                           { this.state.submitting && row.id === this.state.selectedOrder.id
                               ? <CircularProgress size={20} />
                               : <AddIcon fontSize="small" />
                           }
                        </IconButton>
                        <IconButton
                           title="Verwijder bestelling"
                           disabled={this.state.submitting || !row.is_editable}
                           onClick={this.handleClearOrder(row)}
                        >
                           { this.state.submitting && row.id === this.state.selectedOrder.id
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
            order={this.state.selectedOrder}
            items={items}
            selectedValue={this.state.selectedValue}
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

