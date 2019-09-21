import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import DeleteIcon from '@material-ui/icons/Delete';

import useKotbarTableStyles from '../../assets/jss/useKotbarTableStyles';


function EmptyKotbarTableRow({prefix = null, message = null, ...props}) {
    const classes = useKotbarTableStyles();

    return (
        <TableRow>
          <TableCell className={classes.removeCell}>
            <IconButton disabled title="Delete">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </TableCell>
          <TableCell className={classes.dateCell}>{prefix}</TableCell>
          <TableCell className={classes.nameCell}>{message}</TableCell>
          <TableCell className={classes.descriptionCell}></TableCell>
        </TableRow>
    )
}

export default EmptyKotbarTableRow;
