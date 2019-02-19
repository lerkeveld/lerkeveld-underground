import React from 'react';
import Link from 'react-router-dom/Link'
import withRouter from 'react-router-dom/withRouter'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import CloseableSnackbar from '../../components/CloseableSnackbar';
import LoadingButton from '../../components/LoadingButton';
import PasswordField from '../../components/PasswordField';

import authStyle from '../../assets/jss/authStyle';
import * as api from '../../api';


class LoginForm extends React.Component {

  state = {
    email: '',
    password: '',
    errors: {
      email: false,
      password: false
    },
    snackbarOpen: false,
    messageInfo: {},
    submitting: false
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

  doLogin = () => {
    const { referrer } = this.props.location.state || { referrer: { pathname: '/' } };
    api.post({
        path: '/auth/login',
        data: {
            email: this.state.email,
            password: this.state.password
        },
        retryCredentials: false
    }).then(data => {
        api.setCredentials(data).then(
            () => this.props.history.push(referrer)
        );
    }).catch(error => {
        if (error === null) return;
        this.setState(
            {submitting: false},
            () => this.showMessage(error.message)
        );
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    // check errors
    const errors = {};
    if (this.state.email.length === 0)
        errors.email = true;
    if (this.state.password.length === 0)
        errors.password = true;

    if (Object.keys(errors).length !== 0) {
        this.setState({errors: errors});
        return false;
    }

    this.setState({snackbarOpen: false, submitting: true}, this.doLogin);
  }

  render() {
    const { classes } = this.props;

    const ActivateLink = props => <Link to="/auth/activate" {...props} />;
    const ResetLink = props => <Link to="/auth/reset" {...props} />;

    return <React.Fragment>
             <form noValidate onSubmit={this.handleSubmit}>
               <TextField
                 label="E-mail"
                 fullWidth
                 margin="normal"
                 InputLabelProps={{
                   shrink: true,
                 }}
                 required
                 onChange={this.handleRequiredChange('email')}
                 value={this.state.email}
                 error={this.state.errors.email}
               />
               <PasswordField
                 label="Wachtwoord"
                 fullWidth
                 margin="normal"
                 showEndAdornment
                 InputLabelProps={{
                   shrink: true,
                 }}
                 required
                 onChange={this.handleRequiredChange('password')}
                 value={this.state.password}
                 error={this.state.errors.password}
               />
               <LoadingButton
                 className={classes.submit}
                 variant="contained"
                 color="secondary"
                 size="medium"
                 type="submit"
                 loading={this.state.submitting}
               >
                 Login
               </LoadingButton>
             </form>
             <div className={classes.actions}>
                <div className={classes.actionLeft}>
                  <Button
                    color="primary"
                    size="small"
                    component={ActivateLink}
                  >
                    Activeer nu!
                  </Button>
                </div>
                <div className={classes.actionRight}>
                  <Button
                    color="primary"
                    size="small"
                    component={ResetLink}
                  >
                    Wachtwoord vergeten?
                  </Button>
                </div>
             </div>
             <CloseableSnackbar
               anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
               key={this.state.messageInfo.key}
               message={this.state.messageInfo.message}
               open={this.state.snackbarOpen}
               onClose={this.handleSnackbarClose}
             />
           </React.Fragment>
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(authStyle)(LoginForm));
