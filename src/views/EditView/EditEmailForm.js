import React from 'react';
import Link from 'react-router-dom/Link';
import withRouter from 'react-router-dom/withRouter'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import PasswordField from '../../components/PasswordField';
import CloseableSnackbar from '../../components/CloseableSnackbar';

import * as api from '../../api';

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
// eslint-disable-next-line
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validateEmail(email) {
  return re.test(String(email).toLowerCase());
}


class EditEmailForm extends React.Component {

  state = {
    email: '',
    password: '',
    errors: {
      email: false,
      password: false
    },
    snackbarMessage: '',
    snackbarOpen: false
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

    api.post({
        path: '/user/edit/secure',
        data: {
            check: this.state.password,
            email: this.state.email
        }
    }).then(data => {
        this.props.history.push('/profiel');
    }).catch(error => {
        this.setState({snackbarMessage: error.message, snackbarOpen: true});
    })
  }

  render() {
    const ProfileLink = props => <Link to="/profiel" {...props} />;

    return (
        <React.Fragment>
          <Typography variant="subtitle2">
            Wijzig e-mailadres
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
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
            open={this.state.snackbarOpen}
            onClose={this.handleSnackbarClose}
            message={this.state.snackbarMessage}
          />
        </React.Fragment>
    );
  }
}

export default withRouter(EditEmailForm);
