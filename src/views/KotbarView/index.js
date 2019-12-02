import React, {useState, useCallback} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import KotbarForm from './KotbarForm';
import KotbarTable from './KotbarTable';

import useViewStyles from '../../assets/jss/useViewStyles';
import useLoadingSnackbar from '../../hooks/useLoadingSnackbar';
import useEnqueueSnackbar from '../../hooks/useEnqueueSnackbar';
import useFetch from '../../hooks/useFetch';
import * as utils from '../../utils';


function KotbarView(props) {
    const classes = useViewStyles();

    const [reservations, setReservations] = useState([]);

    // FETCHING
    const fetchRequest = useFetch(
        {method: 'GET', path: '/kotbar/'},
        useCallback((data) => {
            const reservations = data.reservations.map(reservation => {
                return Object.assign(
                    {},
                    reservation,
                    {date: new Date(reservation.date)}
                )
            });
            setReservations(utils.sorted(reservations, (r) => r.date));
        }, []),
    );

    useLoadingSnackbar(fetchRequest.isInitialFetch);
    useEnqueueSnackbar(fetchRequest.errorMessage);

    return (
        <main className={classes.mainContent}>
          <div className={classes.toolbar} />
          <Typography variant="h5" className={classes.mainTitle}>
            Kotbar
          </Typography>
          <Typography variant="body2" paragraph className={classes.mainSubHeader}>
            Reserveer hier de kotbar!
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="subtitle2">
                Nieuwe reservatie
              </Typography>
              <KotbarForm
                reservations={reservations}
                refresh={fetchRequest.refresh}
                disabled={fetchRequest.isFetching}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                Reservaties
              </Typography>
              <div style={{width: '100%', overflowX: 'auto'}}>
                <KotbarTable
                  reservations={reservations}
                  refresh={fetchRequest.refresh}
                  isFetching={fetchRequest.isFetching}
                />
              </div>
            </Grid>
          </Grid>
        </main>
    );
}

export default KotbarView;
