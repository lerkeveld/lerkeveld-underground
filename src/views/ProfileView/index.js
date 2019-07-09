import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CloseableSnackbar from '../../components/CloseableSnackbar';
import LoadingSnackbar from '../../components/LoadingSnackbar';

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
    user: {},
    fetching: true,
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

  fetchProfile = () => {
    return api.get({
        path: '/user/profile'
    }).then(data => {
        this.setState({user: data.user, fetching: false});
    }).catch(error => {
        this.setState(
            {fetching: false},
            () => this.showMessage(error.message)
        );
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
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <NameCard
                loading={this.state.fetching}
                firstName={user.first_name}
                lastName={user.last_name}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <EmailCard
                loading={this.state.fetching}
                email={user.email}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <PasswordCard loading={this.state.fetching}/>
            </Grid>
            <Grid item xs={12} md={4}>
              <LocationCard
                loading={this.state.fetching}
                corridor={user.corridor}
                room={user.room}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <PhoneCard
                loading={this.state.fetching}
                phone={user.phone}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <MembershipCard
                loading={this.state.fetching}
                isMember={user.is_member}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <PrivacyCard
                loading={this.state.fetching}
                isSharing={user.is_sharing}
              />
            </Grid>
          </Grid>
        { this.state.fetching
            ? <LoadingSnackbar open />
            : <CloseableSnackbar
                key={this.state.messageInfo.key}
                message={this.state.messageInfo.message}
                open={this.state.snackbarOpen}
                onClose={this.handleSnackbarClose}
              />
        }
        </main>
    );
  }
}

ProfileView.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(viewStyle)(ProfileView);
