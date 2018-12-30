import React from 'react';
import Link from 'react-router-dom/Link'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import CloseableSnackbar from '../../components/CloseableSnackbar';

import authStyle from '../../assets/jss/authStyle';
import * as api from '../../api';


class ResetForm extends React.Component {

  state = {
    email: '',
    errors: {
      email: false
    },
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

  doReset = () => {
    api.post({
        path: '/auth/reset',
        data: {
            email: this.state.email,
        }
    }).then(data => {
        this.setState({submitted: true});
    }).catch(error => {
        this.showMessage(error.message);
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    // check errors
    const errors = {};
    if (this.state.email.length === 0)
        errors.email = true;

    if (Object.keys(errors).length !== 0) {
        this.setState({errors: errors});
        return false;
    }

    this.setState({snackbarOpen: false}, this.doReset);
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
                   <Button
                     className={classes.submit}
                     variant="contained"
                     color="secondary"
                     size="small"
                     type="submit"
                   >
                     Verstuur reset e-mail
                   </Button>
                 </form>
               : <React.Fragment>
                   <Typography variant="body2" paragraph>
                     <span className={classes.bold}>Check je inbox</span> (en je spam folder) voor een e-mail met een link om je wachtwoord te resetten.
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

ResetForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(authStyle)(ResetForm);
