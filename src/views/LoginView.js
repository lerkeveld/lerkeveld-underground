import React from 'react';
import Link from 'react-router-dom/Link'
import withRouter from 'react-router-dom/withRouter'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import PasswordField from '../components/PasswordField.js';


const styles = theme => ({
  actions: {
    marginTop: '16px'
  },
  actionLeft: {
    width: '50%',
    float: 'left',
    textAlign: 'center'
  },
  actionRight: {
    width: '50%',
    float: 'right',
    textAlign: 'center'
  },
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

  handleSubmit = event => {
    const { referrer } = this.props.location.state || { referrer: { pathname: '/' } }
    this.props.history.push(referrer);
    event.preventDefault();
  };

  render() {
    const { classes } = this.props;

    const ActivateLink = props => <Link to="/auth/activate" {...props} />;
    const ResetLink = props => <Link to="/auth/reset" {...props} />;

    return <React.Fragment>
             <form noValidate onSubmit={this.handleSubmit}>
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
                 label="Wachtwoord"
                 fullWidth
                 required
                 margin="normal"
                 showEndAdornment
                 InputLabelProps={{
                   shrink: true,
                 }}
                 onChange={this.handleChange('password')}
                 value={this.state.password}
               />
               <Button
                 className={classes.submit}
                 variant="contained"
                 color="secondary"
                 size="medium"
                 type="submit"
               >
                 Login
               </Button>
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
           </React.Fragment>
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(LoginForm));
