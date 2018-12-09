import React from 'react';
import Link from 'react-router-dom/Link'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import PasswordField from '../../components/PasswordField';

import authStyle from '../../assets/jss/authStyle';


class ActivateForm extends React.Component {

  state = {
    email: '',
    password: '',
    confirm: '',
    errors: {
        email: false,
        password: false,
        confirm: false
    },
    submitted: false
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
    if (this.state.email.length === 0)
        errors.email = true;
    if (this.state.password.length < 8)
        errors.password = true;
    if (this.state.confirm !== this.state.password)
        errors.confirm = true;

    if (Object.keys(errors).length !== 0) {
        this.setState({errors: errors});
        return false;
    }

    // TODO api:activate
    this.setState({submitted: true});
  }

  render() {
    const { classes } = this.props;
    const LoginLink = props => <Link to="/auth/login" {...props} />

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
                   <Button
                     className={classes.submit}
                     variant="contained"
                     color="secondary"
                     size="medium"
                     type="submit"
                   >
                     Activeer
                   </Button>
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
          </React.Fragment>
  }
}

ActivateForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(authStyle)(ActivateForm);
