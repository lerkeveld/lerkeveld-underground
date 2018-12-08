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
    submitted: false
  }

  handleChange = prop => event => {
    this.setState({[prop]: event.target.value});
  }

  handleSubmit = event => {
    this.setState({submitted: true});
    event.preventDefault();
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
                     required
                     margin="normal"
                     InputLabelProps={{
                       shrink: true,
                     }}
                     onChange={this.handleChange('email')}
                     value={this.state.email}
                   />
                   <PasswordField
                     label="Nieuw wachtwoord"
                     helperText="Vul hier minimaal 8 tekens in."
                     fullWidth
                     required
                     margin="normal"
                     InputLabelProps={{
                       shrink: true,
                     }}
                     onChange={this.handleChange('password')}
                     value={this.state.password}
                   />
                   <PasswordField
                     label="Herhaal wachtwoord"
                     fullWidth
                     required
                     margin="normal"
                     InputLabelProps={{
                       shrink: true,
                     }}
                     onChange={this.handleChange('confirm')}
                     value={this.state.confirm}
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