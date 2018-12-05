import React from 'react';
import Link from 'react-router-dom/Link'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import PasswordField from './PasswordField.js';


const styles = theme => ({
  actions: {
    marginTop: '16px',
    textAlign: 'center'
  },
  bold: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  submit: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '16px'
  }
});


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
                   <Typography paragraph>
                     <span className={classes.bold}>Check je inbox</span> (en je spam folder) voor een e-mail met een link om je account te activeren.
                   </Typography>
                   <Typography>
                     Emails worden <span className={classes.bold}>om het kwartier</span> verzonden.
                     (Dit is een voorzorgsmaatregel van KU Leuven tegen spam.)
                   </Typography>
                 </React.Fragment>
             }
             <div className={classes.actions}>
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

export default withStyles(styles)(ActivateForm);
