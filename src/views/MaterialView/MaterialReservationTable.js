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

import DeleteIcon from '@material-ui/icons/Delete';

import MaterialDeleteDialog from './MaterialDeleteDialog';

import materialTableStyle from '../../assets/jss/materialTableStyle';
import * as api from '../../api';
import * as utils from '../../utils';

const emptyRow = (classes, prefix, message) => {
    return (
        <TableRow>
          <TableCell className={classes.removeCell}>
            <IconButton title="Delete" disabled>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </TableCell>
          <TableCell className={classes.dateCell}>{prefix}</TableCell>
          <TableCell className={classes.nameCell}>{message}</TableCell>
          <TableCell className={classes.materialCell}></TableCell>
        </TableRow>
    )
};


class MaterialReservationTable extends React.Component {

  state = {
    dialogOpen: false,
    submitting: false,
    reservation: {}
  }

  handleButtonClick = (reservation) => () => {
    this.setState({dialogOpen: true, reservation: reservation});
  }

  doDelete = () => {
    if (this.state.reservation.id === undefined)
      return;
    api.del({
        path: '/materiaal/' + this.state.reservation.id,
    }).then(data => {
        this.setState(
          {submitting: false, reservation: {}},
          () => this.props.showMessage('Reservatie geannuleerd', this.props.refresh)
        );
    }).catch(error => {
        if (error === null) return;
        this.setState(
          {submitting: false, reservation: {}},
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
    const { classes, reservations = [], loading } = this.props;

    return (
        <React.Fragment>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.removeCell}></TableCell>
                <TableCell className={classes.dateCell}>Datum</TableCell>
                <TableCell className={classes.nameCell}>Verantwoordelijke</TableCell>
                <TableCell className={classes.materialCell}>Materiaal</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? emptyRow(classes) : null}
              {!loading && reservations.length === 0
                 ? emptyRow(classes, '/', 'Geen reservaties')
                 : null
              }
              {reservations.map(row => {
                 return (
                   <TableRow key={row.id}>
                     <TableCell className={classes.removeCell}>
                        <IconButton
                           title="Delete"
                           disabled={this.state.submitting || !row.own}
                           onClick={this.handleButtonClick(row)}
                        >
                           { this.state.submitting && row.id === this.state.reservation.id
                               ? <CircularProgress size={20} />
                               : <DeleteIcon fontSize="small" />
                           }
                        </IconButton>
                     </TableCell>
                     <TableCell className={classes.dateCell}>
                       {utils.formatDate(row.date)}
                     </TableCell>
                     <TableCell className={classes.nameCell}>
                       {row.username}
                     </TableCell>
                     <TableCell className={classes.materialCell}>
                       {row.items.map(item => item.name).join(", ")}
                     </TableCell>
                   </TableRow>
                 );
              })}
            </TableBody>
          </Table>
          <MaterialDeleteDialog 
            open={this.state.dialogOpen}
            onAccept={this.handleDialogAccept}
            onClose={this.handleDialogChange(false)}
            reservation={this.state.reservation}
          />
        </React.Fragment>
    );
  }
}

MaterialReservationTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(materialTableStyle)(MaterialReservationTable);
