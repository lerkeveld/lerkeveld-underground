import React from 'react';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';

import useBreadTableStyles from '../../assets/jss/useBreadTableStyles';
import * as utils from '../../utils';


function BreadTableRow({
    row,
    disabledAdd,
    disabledClear,
    isSubmittingSelectedAdd,
    isSubmittingSelectedClear,
    onAddSelected,
    onClearSelected,
    ...props
}) {
    const classes = useBreadTableStyles();

    return (
        <TableRow>
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
              disabled={disabledAdd}
              onClick={onAddSelected}
            >
               { isSubmittingSelectedAdd
                   ? <CircularProgress size={20} />
                   : <AddIcon fontSize="small" />
               }
            </IconButton>
          </TableCell>
          <TableCell className={classes.buttonCell}>
            <IconButton
              title="Maak bestelling leeg"
              disabled={disabledClear}
              onClick={onClearSelected}
            >
               { isSubmittingSelectedClear
                   ? <CircularProgress size={20} />
                   : <ClearIcon fontSize="small" />
               }
            </IconButton>
          </TableCell>
        </TableRow>
    );
}

export default BreadTableRow
