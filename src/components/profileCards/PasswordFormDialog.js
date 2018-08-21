import React from 'react';
import {
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    TextField, Button
} from '@material-ui/core';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import PasswordField from '../PasswordField';

function PasswordFormDialog(props) {
  const { dialogOpen, handleDialogClose, fullScreen } = props;

  return (
      <Dialog
        fullScreen={fullScreen}
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby='passwordform-dialog-title'
        fullWidth
      >
        <DialogTitle id='passwordform-dialog-title'>Update wachtwoord</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update het wachtwoord waarmee je inlogt op deze applicatie.
          </DialogContentText>
          <TextField
            margin="dense"
            label="Nieuw wachtwoord"
            type="password"
            fullWidth
            required
          />
          <TextField
            margin="dense"
            label="Herhaal nieuw wachtwoord"
            type="password"
            fullWidth
            required
          />
          <PasswordField
            margin="dense"
            label="Huidig wachtwoord"
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDialogClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default withMobileDialog()(PasswordFormDialog);
