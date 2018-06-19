import React from 'react';
import {
    Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
    Button, FormControlLabel, Checkbox
} from '@material-ui/core';

function PrivacyFormDialog(props) {
  const { dialogOpen, handleDialogClose } = props;

  return (
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        aria-labelledby='passwordform-dialog-title'
        fullWidth
      >
        <DialogTitle id='passwordform-dialog-title'>Update privacy settings</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Als je ervoor kiest om jouw  gegevens te delen, kunnen Lerkies
            via deze applicatie je gedeelde gegevens zien. Gegevens die
            worden gedeeld zijn je naam, je kamer, je e-mailadres en je
            telefoon.
          </DialogContentText>
          <FormControlLabel
            control={<Checkbox />}
            label="Ik deel mijn gegevens met alle Lerkies."
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

export default PrivacyFormDialog;
