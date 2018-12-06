import React from 'react';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

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
            showEndAdornment
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
