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


class PasswordFormDialog extends React.Component {

  state = {
    password: '',
    confirm: '',
    old: '',
    errors: {
        password: false,
        confirm: false,
        old: false
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

  handlePasswordChange = event => {
    const password = event.target.value;
    const stateUpdate = {
        password: password,
        errors: this.state.errors
    };
    stateUpdate.errors.password = password.length < 8;
    stateUpdate.errors.confirm = password !== this.state.confirm;
    this.setState(stateUpdate);
  }

  handleConfirmChange = event => {
    const confirm = event.target.value;
    const stateUpdate = {
        confirm: confirm,
        errors: this.state.errors
    };
    stateUpdate.errors.confirm = confirm !== this.state.password;
    this.setState(stateUpdate);
  }

  handleSubmit = event => {
    event.preventDefault();

    // check errors
    const errors = {};
    if (this.state.password.length < 8)
        errors.password = true;
    if (this.state.confirm !== this.state.password)
        errors.confirm = true;
    if (this.state.old.length === 0)
        errors.old = true;

    if (Object.keys(errors).length !== 0) {
        this.setState({errors: errors});
        return false;
    }

    // TODO api:user:edit:password
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
          <DialogTitle id='passwordform-dialog-title'>Update wachtwoord</DialogTitle>
          <DialogContent>
            <DialogContentText variant="body2">
              Update het wachtwoord waarmee je inlogt op deze applicatie.
            <PasswordField
              margin="normal"
              label="Huidig wachtwoord"
              fullWidth
              showEndAdornment
              InputLabelProps={{
                shrink: true
              }}
              required
              value={this.state.old}
              onChange={this.handleRequiredChange('old')}
              error={this.state.errors.old}
            />
            </DialogContentText>
            <TextField
              margin="normal"
              label="Nieuw wachtwoord"
              helperText="Vul hier minimaal 8 tekens in."
              type="password"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              required
              value={this.state.password}
              onChange={this.handlePasswordChange}
              error={this.state.errors.password}
            />
            <TextField
              margin="normal"
              label="Herhaal nieuw wachtwoord"
              type="password"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
              required
              value={this.state.confirm}
              onChange={this.handleConfirmChange}
              error={this.state.errors.confirm}
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

export default withMobileDialog()(PasswordFormDialog);
