import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import DeleteIcon from '@material-ui/icons/Delete';

import useMaterialTableStyles from '../../assets/jss/useMaterialTableStyles';
import * as utils from '../../utils';


function MaterialTableRow({
    row = {},
    disabledDelete,
    isSubmittingSelectedDelete,
    onDeleteSelected,
    ...props
}) {
    const classes = useMaterialTableStyles();

    return (
        <TableRow>
          <TableCell className={classes.removeCell}>
             <IconButton
                title="Delete"
                disabled={disabledDelete}
                onClick={onDeleteSelected}
             >
               { isSubmittingSelectedDelete
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
}

export default MaterialTableRow;
