import React from 'react';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

import PasswordField from '../../../components/PasswordField';

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
// eslint-disable-next-line
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validateEmail(email) {
  return re.test(String(email).toLowerCase());
}


class EmailFormDialog extends React.Component {

  state = {
    email: '',
    password: '',
    errors: {
      email: false,
      password: false
    }
  }

  handleRequiredChange = prop => event => {
    const value = event.target.value;
    const stateUpdate = {
        [prop]: value,
        errors: this.state.errors
    };
    stateUpdate.errors[prop] = value.length === 0;
    this.setState(stateUpdate);
  }

  handleEmailChange = event => {
    const email = event.target.value;
    const stateUpdate = {
        email: email,
        errors: this.state.errors
    };
    stateUpdate.errors.email = !validateEmail(email);
    this.setState(stateUpdate);
  }

  handleSubmit = event => {
    event.preventDefault();

    // check errors
    const errors = {};
    if (!validateEmail(this.state.email))
        errors.email = true;
    if (this.state.password.length === 0)
        errors.password = true;

    if (Object.keys(errors).length !== 0) {
        this.setState({errors: errors});
        return false;
    }

    // TODO api:user:edit:email
    this.props.handleDialogClose();
  }

  render() {
    const { dialogOpen, handleDialogClose, fullScreen, ...rest } = this.props;

    return (
        <Dialog
          fullScreen={fullScreen}
          open={dialogOpen}
          onClose={handleDialogClose}
          aria-labelledby='emailform-dialog-title'
          fullWidth
          {...rest}
        >
          <DialogTitle id='emailform-dialog-title'>Update e-mailadres</DialogTitle>
          <DialogContent>
            <DialogContentText variant="body2">
              Update het e-mailadres waarmee je inlogt op deze applicatie.
              Dit is niet gelinkt aan het e-mailadres waarop je Lerkeveld emails ontvangt.
            </DialogContentText>
            <TextField
              margin="normal"
              label="E-mailadres"
              helperText={this.state.errors.email
                  ? "Vul hier een geldig e-mailadres in."
                  : null
              }
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              required
              value={this.state.email}
              onChange={this.handleEmailChange}
              error={this.state.errors.email}
            />
            <PasswordField
              margin="normal"
              label="Huidig wachtwoord"
              fullWidth
              showEndAdornment
              InputLabelProps={{
                shrink: true
              }}
              required
              value={this.state.password}
              onChange={this.handleRequiredChange('password')}
              error={this.state.errors.password}
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

export default withMobileDialog()(EmailFormDialog);
