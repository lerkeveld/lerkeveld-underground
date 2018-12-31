import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import tableStyle from '../../assets/jss/tableStyle';

const emptyRow = (classes, message) => {
    return (
        <TableRow>
          <TableCell className={classes.tableCell} style={{ minWidth: "120px" }}>
            {message}
          </TableCell>
          <TableCell className={classes.tableCell} style={{ minWidth: "200px" }}>
          </TableCell>
          <TableCell className={classes.tableCell} style={{ minWidth: "400px" }}>
          </TableCell>
        </TableRow>
    )
};


function KotbarReservationTable(props) {
  const { classes, reservations, loading } = props;

  return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Datum</TableCell>
            <TableCell className={classes.tableCell}>Verantwoordelijke</TableCell>
            <TableCell className={classes.tableCell}>Beschrijving</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? emptyRow(classes) : null}
          {!loading && reservations.length === 0 ? emptyRow(classes, 'Geen reservaties') : null}
          {reservations.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell className={classes.tableCell} style={{ minWidth: "120px" }}>
                  {row.date.toLocaleDateString('nl-be', {'day': '2-digit', 'month': '2-digit', 'year': 'numeric'})}
                </TableCell>
                <TableCell className={classes.tableCell} style={{ minWidth: "200px" }}>
                  {row.username}
                </TableCell>
                <TableCell className={classes.tableCell} style={{ minWidth: "400px" }}>
                  {row.description}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
  );
}

KotbarReservationTable.propTypes = {
  classes: PropTypes.object.isRequired,
  reservations: PropTypes.array.isRequired,
};

KotbarReservationTable.defaultProps = {
  reservations: []
}

export default withStyles(tableStyle)(KotbarReservationTable);
