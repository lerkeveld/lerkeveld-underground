import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import CloseableSnackbar from '../../components/CloseableSnackbar';
import LoadingButton from '../../components/LoadingButton';
import PasswordField from '../../components/PasswordField';

import authStyle from '../../assets/jss/authStyle';
import * as api from '../../api';


class ActivateForm extends React.Component {

  state = {
    email: '',
    password: '',
    confirm: '',
    checked: false,
    checkedPrivacy: false,
    errors: {
        email: false,
        password: false,
        confirm: false,
        checkedPrivacy: false
    },
    submitting: false,
    submitted: false,
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

  handleCheckedState = event => {
    this.setState({checked: event.target.checked});
  }

  handleCheckedPrivacyState = event => {
    const checkedPrivacy = event.target.checked;
    const stateUpdate = {
        checkedPrivacy: checkedPrivacy,
        errors: this.state.errors
    };
    stateUpdate.errors.checkedPrivacy = checkedPrivacy !== true;
    this.setState(stateUpdate);
  }

  doActivate = () => {
    api.post({
        path: '/auth/activate',
        data: {
            email: this.state.email,
            password: this.state.password,
            isSharing: this.state.checked
        }
    }).then(data => {
        this.setState({submitted: true, submitting: false});
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
    if (this.state.password.length < 8)
        errors.password = true;
    if (this.state.confirm !== this.state.password)
        errors.confirm = true;
    if (this.state.checkedPrivacy !== true)
        errors.checkedPrivacy = true;

    if (Object.keys(errors).length !== 0) {
        this.setState({errors: errors});
        return false;
    }

    this.setState({snackbarOpen: false, submitting: true}, this.doActivate)
  }

  render() {
    const { classes } = this.props;
    const LoginLink = React.forwardRef((props, ref) => <Link to="/auth/login" {...props} ref={ref} />);

    return <React.Fragment>
             { !this.state.submitted
               ? <form noValidate onSubmit={this.handleSubmit}>
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
                     label="Nieuw wachtwoord"
                     helperText="Vul hier minimaal 8 tekens in."
                     fullWidth
                     margin="normal"
                     InputLabelProps={{
                       shrink: true,
                     }}
                     required
                     onChange={this.handlePasswordChange}
                     value={this.state.password}
                     error={this.state.errors.password}
                   />
                   <PasswordField
                     label="Herhaal wachtwoord"
                     fullWidth
                     margin="normal"
                     InputLabelProps={{
                       shrink: true,
                     }}
                     required
                     onChange={this.handleConfirmChange}
                     value={this.state.confirm}
                     error={this.state.errors.confirm}
                   />
                   <FormControlLabel
                     control={<Checkbox
                         onChange={this.handleCheckedState}
                         checked={this.state.checked}
                     />}
                     label={<Typography variant="body2">
                         Ik deel mijn contactgegevens met alle Lerkies.
                            </Typography>
                     }
                   />
                   <FormControlLabel
                     control={<Checkbox
                         onChange={this.handleCheckedPrivacyState}
                         checked={this.state.checkedPrivacy}
                     />}
                     label={
                         <Typography
                             variant="body2"
                             color={this.state.errors.checkedPrivacy ? 'error' : 'default'}
                         >
                           Ik heb de <a
                               target="_blank"
                               rel="noopener noreferrer"
                               style={{color: this.state.errors.checkedPrivacy ? "inherit" : null}}
                               href="/privacy_policy.pdf"
                           >privacy policy</a> gelezen.<sup>*</sup>
                         </Typography>
                     }
                   />
                   <LoadingButton
                     className={classes.submit}
                     variant="contained"
                     color="secondary"
                     size="medium"
                     type="submit"
                     loading={this.state.submitting}
                   >
                     Activeer
                   </LoadingButton>
                 </form>
               : <React.Fragment>
                   <Typography variant="body2" paragraph>
                     <span className={classes.bold}>Check je inbox</span> (en je spam folder) voor een e-mail met een link om je account te activeren.
                   </Typography>
                   <Typography variant="body2">
                     E-mails worden <span className={classes.bold}>om het kwartier</span> verzonden.
                     (Dit is een voorzorgsmaatregel van KU Leuven tegen spam.)
                   </Typography>
                 </React.Fragment>
             }
             <div className={classes.action}>
               <Button
                 color="primary"
                 size="small"
                 component={LoginLink}
               >
                 Naar Login
               </Button>
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

ActivateForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(authStyle)(ActivateForm);
