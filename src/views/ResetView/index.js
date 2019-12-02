import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ResetForm from './ResetForm';
import useAuthStyles from '../../assets/jss/useAuthStyles';

const LoginLink = React.forwardRef((props, ref) => <Link to="/auth/login" {...props} ref={ref} />);


function ResetView(props) {
    const classes = useAuthStyles();
    const [submitted, setSubmitted] = useState(false);

    return (
        <>
          { !submitted
            ? <ResetForm setSubmitted={setSubmitted} />
            : <>
                <Typography variant="body2" paragraph>
                  <span className={classes.bold}>Check je inbox</span> (en je spam folder) voor een e-mail met een link om je wachtwoord te resetten.
                </Typography>
                <Typography variant="body2">
                  E-mails worden <span className={classes.bold}>om het kwartier</span> verzonden.
                  (Dit is een voorzorgsmaatregel van KU Leuven tegen spam.)
                </Typography>
              </>
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
        </>
    )
}

export default ResetView;
