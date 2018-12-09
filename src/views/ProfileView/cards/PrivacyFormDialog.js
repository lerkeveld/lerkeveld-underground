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


class PrivacyFormDialog extends React.Component {

  state = {
    checked: false
  }

  handleCheckedState = event => {
    this.setState({checked: event.target.checked});
  }

  handleSubmit = event => {
    event.preventDefault();
    // TODO api:user:edit:privacy
    this.props.handleDialogClose();
  }

  render() {
    const { dialogOpen, handleDialogClose, fullScreen, ...rest } = this.props;

    return (
        <Dialog
          fullScreen={fullScreen}
          open={dialogOpen}
          onClose={handleDialogClose}
          aria-labelledby='passwordform-dialog-title'
          fullWidth
          {...rest}
        >
          <DialogTitle id='passwordform-dialog-title'>Update privacy settings</DialogTitle>
          <DialogContent>
            <DialogContentText variant="body2">
              Als je ervoor kiest om jouw  gegevens te delen, kunnen Lerkies
              via deze applicatie je gedeelde gegevens zien. Gegevens die
              worden gedeeld zijn je naam, je kamer, je e-mailadres en je
              telefoon.
            </DialogContentText>
            <FormControlLabel
              control={<Checkbox
                  checked={this.state.checked}
                  onChange={this.handleCheckedState}
              />}
              label="Ik deel mijn gegevens met alle Lerkies."
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
    );
  }
}

export default withMobileDialog()(PrivacyFormDialog);
