import React from 'react';
import Link from 'react-router-dom/Link';
import withRouter from 'react-router-dom/withRouter'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import CloseableSnackbar from '../../components/CloseableSnackbar';
import PasswordField from '../../components/PasswordField';

import * as api from '../../api';


class EditPasswordForm extends React.Component {

  state = {
    password: '',
    confirm: '',
    check: '',
    errors: {
        password: false,
        confirm: false,
        check: false
    },
    snackbarOpen: false,
    messageInfo: {}
  }

  showMessage = (message) => {
      this.setState({
          snackbarOpen: true,
          messageInfo: {
              key: new Date().getTime(),
              message: message
          }
      });
  }

  handleSnackbarClose = () => {
      this.setState({snackbarOpen: false});
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

  doEdit = () => {
    api.post({
        path: '/user/edit/secure',
        data: {
            check: this.state.check,
            password: this.state.password
        }
    }).then(data => {
        this.props.history.push('/profiel');
    }).catch(error => {
        this.showMessage(error.message);
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    // check errors
    const errors = {};
    if (this.state.check.length === 0)
        errors.confirm = true;
    if (this.state.password.length < 8)
        errors.password = true;
    if (this.state.confirm !== this.state.password)
        errors.confirm = true;

    if (Object.keys(errors).length !== 0) {
        this.setState({errors: errors});
        return false;
    }

    this.setState({snackbarOpen: false}, this.doEdit);
  }

  render() {
    const ProfileLink = props => <Link to="/profiel" {...props} />;

    return (
        <React.Fragment>
          <Typography variant="subtitle2">
            Wijzig wachtwoord
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <PasswordField
              margin="normal"
              label="Huidig wachtwoord"
              fullWidth
              showEndAdornment
              InputLabelProps={{
                shrink: true
              }}
              required
              value={this.state.check}
              onChange={this.handleRequiredChange('check')}
              error={this.state.errors.check}
            />
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
            <div style={{marginTop: '8px'}}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                type="submit"
                style={{marginRight: "8px"}}
              >
                Submit
              </Button>
              <Button
                color="primary"
                size="small"
                component={ProfileLink}
              >
                Back
              </Button>
            </div>
          </form>
          <CloseableSnackbar
            key={this.state.messageInfo.key}
            message={this.state.messageInfo.message}
            open={this.state.snackbarOpen}
            onClose={this.handleSnackbarClose}
          />
        </React.Fragment>
    );
  }
}

export default withRouter(EditPasswordForm);
