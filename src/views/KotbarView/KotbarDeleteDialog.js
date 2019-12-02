import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

import * as utils from '../../utils';


function DeleteDialog({
    open = false,
    reservation = {},
    onAccept,
    onClose
}) {
  const { date=new Date() } = reservation;
   
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
          Annuleer Reservatie?
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography id="alert-dialog-description" variant="body2">
          Je staat op het punt om jouw reservatie op {utils.formatDate(date)} te annuleren.
          Wil je doorgaan?
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

export default DeleteDialog;
