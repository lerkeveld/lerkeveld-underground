import React from 'react';
import {
    Link,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ArrowBack from '@material-ui/icons/ArrowBack';

import EditEmailForm from './EditEmailForm';
import EditPasswordForm from './EditPasswordForm';
import EditPrivacyForm from './EditPrivacyForm';

import useViewStyles from '../../assets/jss/useViewStyles';


function EditView(props) {
    const classes = useViewStyles();
    const ProfileLink = React.forwardRef((props, ref) => <Link to="/profiel" {...props} ref={ref} />);

    return (
        <main className={classes.mainContent}>
          <div className={classes.toolbar} />
          <Typography variant="h5" className={classes.mainTitle}>
            <IconButton component={ProfileLink}>
              <ArrowBack />
            </IconButton>
            Update Profiel
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Switch>
                <Route exact path="/edit/email" component={EditEmailForm} />
                <Route exact path="/edit/password" component={EditPasswordForm} />
                <Route exact path="/edit/privacy" component={EditPrivacyForm} />
                <Redirect to="/" />
              </Switch>
            </Grid>
          </Grid>
        </main>
    );
}

export default EditView;
