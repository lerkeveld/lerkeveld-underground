import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import tableStyle from '../../assets/jss/tableStyle';

const formatDate = (date) => {
  return date.toLocaleDateString(
    'nl-be',
    {'day': '2-digit', 'month': '2-digit', 'year': 'numeric'}
  );
};


function MaterialReservationTable(props) {
  const { classes, reservations } = props;

  return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Datum</TableCell>
            <TableCell className={classes.tableCell}>Verantwoordelijke</TableCell>
            <TableCell className={classes.tableCell}>Materiaal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { reservations.sort((r1, r2) => {return r1.date > r2.date}).map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell className={classes.tableCell} style={{ minWidth: "100px" }}>
                    {formatDate(row.date)}
                  </TableCell>
                  <TableCell className={classes.tableCell} style={{ minWidth: "200px" }}>
                    {row.user}
                  </TableCell>
                  <TableCell className={classes.tableCell} style={{ minWidth: "400px" }}>
                    {row.items.join(", ")}
                  </TableCell>
                </TableRow>
              );
          })}
        </TableBody>
      </Table>
  );
}

MaterialReservationTable.propTypes = {
  classes: PropTypes.object.isRequired,
  reservations: PropTypes.array.isRequired,
};

MaterialReservationTable.defaultProps = {
  reservations: []
}

export default withStyles(tableStyle)(MaterialReservationTable);
