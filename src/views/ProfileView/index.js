import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import EmailCard from './cards/EmailCard';
import LocationCard from './cards/LocationCard';
import MembershipCard from './cards/MembershipCard';
import NameCard from './cards/NameCard';
import PasswordCard from './cards/PasswordCard';
import PhoneCard from './cards/PhoneCard';
import PrivacyCard from './cards/PrivacyCard';

import viewStyle from '../../assets/jss/viewStyle';
import * as api from '../../api';


class ProfileView extends React.Component {

  state = {
    user: {}
  }

  fetchProfile = () => {
    return api.get({
        path: '/user/profile'
    }).then(data => {
        this.setState({user: data.user});
    })
  }

  componentDidMount() {
    this.fetchProfile();
  }

  render () {
    const { classes } = this.props;
    const { user } = this.state;

    return (
        <main className={classes.mainContent}>
          <div className={classes.toolbar} />
          <Typography variant="h5" className={classes.mainTitle}>
            Profiel
          </Typography>
          <Typography variant="body2" paragraph className={classes.mainSubHeader}>
            Contacteer Lerkeveld IT voor niet-aanpasbare velden.
          </Typography>
          <Grid container spacing={16}>
            <Grid item xs={12} md={4}>
              <NameCard firstName={user.first_name} lastName={user.last_name}/>
            </Grid>
            <Grid item xs={12} md={4}>
              <EmailCard email={user.email}/>
            </Grid>
            <Grid item xs={12} md={4}>
              <PasswordCard/>
            </Grid>
            <Grid item xs={12} md={4}>
              <LocationCard corridor={user.corridor} room={user.room}/>
            </Grid>
            <Grid item xs={12} md={4}>
              <PhoneCard phone={user.phone}/>
            </Grid>
            <Grid item xs={12} md={4}>
              <MembershipCard isMember={user.is_member}/>
            </Grid>
            <Grid item xs={12} md={4}>
              <PrivacyCard isSharing={user.is_sharing}/>
            </Grid>
          </Grid>
        </main>
    );
  }
}

ProfileView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(ProfileView);
