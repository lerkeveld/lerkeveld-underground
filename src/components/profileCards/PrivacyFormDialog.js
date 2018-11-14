import React from 'react';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function PrivacyFormDialog(props) {
  const { dialogOpen, handleDialogClose, fullScreen } = props;

  return (
      <Dialog
        fullScreen={fullScreen}
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

export default withMobileDialog()(PrivacyFormDialog);
