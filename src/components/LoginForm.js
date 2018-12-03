import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


import PasswordField from './PasswordField.js';


const styles = theme => ({
  button: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  submit: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '16px'
  },
  actions: {
    marginTop: '16px'
  },
  actionRight: {
    width: '50%',
    float: 'right'
  },
  actionLeft: {
    width: '50%',
    float: 'left'
  }
});


class LoginForm extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = prop => event => {
    this.setState({[prop]: event.target.value});
  }

  handleCheckedChange = prop => event => {
    this.setState({[prop]: event.target.checked});
  }

  render() {
    const { classes, setAuthenticated } = this.props;
    return <React.Fragment>
             <TextField
               label="E-mail"
               fullWidth
               required
               margin="normal"
               InputLabelProps={{
                 shrink: true,
               }}
               onChange={this.handleChange('email').bind(this)}
               value={this.state.email}
             />
             <PasswordField
               label="Wachtwoord"
               fullWidth
               required
               margin="normal"
               InputLabelProps={{
                 shrink: true,
               }}
               onChange={this.handleChange('password').bind(this)}
               value={this.state.password}
             />
             <Button
               className={classes.submit}
               variant="contained"
               color="secondary"
               size="medium"
               onClick={() => setAuthenticated(true)}
             >
               Login
             </Button>
             <div className={classes.actions}>
                <div className={classes.actionLeft}>
                  <Button className={classes.button} color="primary" size="small">
                    Activeer nu!
                  </Button>
                </div>
                <div className={classes.actionRight}>
                  <Button className={classes.button} color="primary" size="small">
                    Wachtwoord vergeten?
                  </Button>
                </div>
             </div>
           </React.Fragment>
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm);
