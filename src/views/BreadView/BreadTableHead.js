import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AddIconOutlined from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';

import useBreadTableStyles from '../../assets/jss/useBreadTableStyles';


function BreadTableHead({
    disabled,
    onAddGlobal,
    onDeleteGlobal,
    isSubmittingAddGlobal,
    isSubmittingClearGlobal,
    ...props
}) {
    const classes = useBreadTableStyles();

    return (
        <TableHead>
          <TableRow>
            <TableCell className={classes.dateCell}>Week</TableCell>
            <TableCell className={classes.ordersCell}>Bestelling</TableCell>
            <TableCell className={classes.priceCell}>Prijs</TableCell>
            <TableCell className={classes.buttonCell}>
              <IconButton
                title="Bestel voor alle weken"
                disabled={disabled}
                onClick={onAddGlobal}
              >
                { isSubmittingAddGlobal
                    ? <CircularProgress size={20} />
                    : <AddIconOutlined fontSize="small" />
                }
              </IconButton>
            </TableCell>
            <TableCell className={classes.buttonCell}>
              <IconButton
                title="Maak alle bestellingen leeg"
                disabled={disabled}
                onClick={onDeleteGlobal}
              >
                { isSubmittingClearGlobal
                    ? <CircularProgress size={20} />
                    : <DeleteIcon fontSize="small" />
                }
              </IconButton>
            </TableCell>
          </TableRow>
        </TableHead>
    )
}

export default BreadTableHead;
