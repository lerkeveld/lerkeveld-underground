import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import LockIcon from '@material-ui/icons/Lock';

import useBreadTableStyles from '../../assets/jss/useBreadTableStyles';


function EmptyBreadTableRow({prefix = null, message = null, ...props}) {
    const classes = useBreadTableStyles();

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
}

export default EmptyBreadTableRow;
