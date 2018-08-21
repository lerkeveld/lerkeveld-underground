import React from 'react';
import {
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    TextField, Button
} from '@material-ui/core';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import PasswordField from '../PasswordField';

function EmailFormDialog(props) {
  const { dialogOpen, handleDialogClose, fullScreen } = props;

  return (
      <Dialog
        fullScreen={fullScreen}
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby='emailform-dialog-title'
        fullWidth
      >
        <DialogTitle id='emailform-dialog-title'>Update e-mailadres</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Update het e-mailadres waarmee je inlogt op deze applicatie.
            Dit is niet gelinkt aan het e-mailadres waarop je Lerkeveld emails ontvangt.
          </DialogContentText>
          <TextField
            margin="dense"
            id="emailaddress"
            label="E-mailadres"
            type="email"
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

export default withMobileDialog()(EmailFormDialog);
