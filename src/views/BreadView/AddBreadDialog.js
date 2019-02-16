import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

import * as utils from '../../utils';


function AddBreadDialog(props) {
  const { open, onAccept, onClose, order } = props;
  const { date=new Date() } = order;
   
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" disableTypography>
        <Typography variant="subtitle1">
            Brood toevoegen
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography id="alert-dialog-description" variant="body2">
          Kies een brood uit deze opties, je kan meerdere broden tegelijk bestellen.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="default">
          Cancel
        </Button>
        <Button onClick={onAccept} color="primary" autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddBreadDialog;
