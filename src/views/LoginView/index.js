import React from 'react';
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button';
import LoginForm from './LoginForm';

import useAuthStyles from '../../assets/jss/useAuthStyles';

const ActivateLink = React.forwardRef((props, ref) => <Link to="/auth/activate" {...props} ref={ref} />);
const ResetLink = React.forwardRef((props, ref) => <Link to="/auth/reset" {...props} ref={ref} />);


function LoginView(props) {
    const classes = useAuthStyles();

    return <>
      <LoginForm />
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
      </div>,
    </>
}


export default LoginView;
