import React, {useState, useCallback } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import EmailCard from './cards/EmailCard';
import LocationCard from './cards/LocationCard';
import MembershipCard from './cards/MembershipCard';
import NameCard from './cards/NameCard';
import PasswordCard from './cards/PasswordCard';
import PhoneCard from './cards/PhoneCard';
import PrivacyCard from './cards/PrivacyCard';

import useViewStyles from '../../assets/jss/useViewStyles';
import useLoadingSnackbar from '../../hooks/useLoadingSnackbar';
import useEnqueueSnackbar from '../../hooks/useEnqueueSnackbar';
import useFetch from '../../hooks/useFetch';


function ProfileView(props) {
    const classes = useViewStyles();
    const [user, setUser] = useState({});

    // FETCHING
    const fetchRequest = useFetch(
        {method: 'GET', path: '/user/profile'},
        useCallback((data) => {setUser(data.user);}, []),
    );

    useLoadingSnackbar(fetchRequest.isInitialFetch);
    useEnqueueSnackbar(fetchRequest.errorMessage);

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
                loading={fetchRequest.isFetching}
                firstName={user.first_name}
                lastName={user.last_name}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <EmailCard
                loading={fetchRequest.isFetching}
                email={user.email}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <PasswordCard loading={fetchRequest.isFetching}/>
            </Grid>
            <Grid item xs={12} md={4}>
              <LocationCard
                loading={fetchRequest.isFetching}
                corridor={user.corridor}
                room={user.room}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <PhoneCard
                loading={fetchRequest.isFetching}
                phone={user.phone}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <MembershipCard
                loading={fetchRequest.isFetching}
                isMember={user.is_member}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <PrivacyCard
                loading={fetchRequest.isFetching}
                isSharing={user.is_sharing}
              />
            </Grid>
          </Grid>
        </main>
    );
}

export default ProfileView;
