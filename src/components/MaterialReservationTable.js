import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto'
  },
  tableCell : {
    paddingLeft: '18px',
    paddingRight: '0px'
  }
});

function MaterialReservationTable(props) {
  const { classes, reservations } = props;

  return (
    <React.Fragment>
      <Typography variant="body2">
        Reservaties
      </Typography>
      <div className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableCell}>Datum</TableCell>
              <TableCell className={classes.tableCell}>Verantwoordelijke</TableCell>
              <TableCell className={classes.tableCell}>Materiaal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations.sort((r1, r2) => {return r1.date > r2.date}).map(row => {
              return (
                <TableRow key={row.id}>
                  <TableCell className={classes.tableCell} style={{ minWidth: "100px" }}>
                    {row.date.toLocaleDateString('nl-be', {'day': '2-digit', 'month': '2-digit', 'year': 'numeric'})}
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
      </div>
    </React.Fragment>
  );
}

MaterialReservationTable.propTypes = {
  classes: PropTypes.object.isRequired,
  reservations: PropTypes.array.isRequired,
};

MaterialReservationTable.defaultProps = {
  reservations: []
}

export default withStyles(styles)(MaterialReservationTable);
