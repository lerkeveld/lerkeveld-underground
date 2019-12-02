import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import useMaterialTableStyles from '../../assets/jss/useMaterialTableStyles';


function MaterialTableHead(props) {
    const classes = useMaterialTableStyles();

    return (
        <TableHead>
          <TableRow>
            <TableCell size="medium" className={classes.removeCell}></TableCell>
            <TableCell size="medium" className={classes.dateCell}>Datum</TableCell>
            <TableCell size="medium" className={classes.nameCell}>Verantwoordelijke</TableCell>
            <TableCell size="medium" className={classes.materialCell}>Materiaal</TableCell>
          </TableRow>
        </TableHead>
    )
}

export default MaterialTableHead;
