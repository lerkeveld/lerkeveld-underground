import React, {useState, useCallback} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import MaterialForm from './MaterialForm';
import MaterialTable from './MaterialTable';

import useViewStyles from '../../assets/jss/useViewStyles';
import useLoadingSnackbar from '../../hooks/useLoadingSnackbar';
import useEnqueueSnackbar from '../../hooks/useEnqueueSnackbar';
import useFetch from '../../hooks/useFetch';
import useCombineFetch from '../../hooks/useCombineFetch';
import * as utils from '../../utils';


function MaterialView(props) {
    const classes = useViewStyles();

    const [reservations, setReservations] = useState([]);
    const [items, setItems] = useState([]);

    // FETCHING
    const fetchReservationsRequest = useFetch(
        {method: 'GET', path: '/materiaal/'},
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
    const fetchItemsRequest = useFetch(
        {method: 'GET', path: '/materiaal/type'},
        useCallback((data) => {
            setItems(utils.sorted(data.items, (i) => i.name));
        }, []),
    );
    const combinedFetchRequest = useCombineFetch([
        fetchReservationsRequest,
        fetchItemsRequest,
    ]);

    useLoadingSnackbar(combinedFetchRequest.isInitialFetch);
    useEnqueueSnackbar(combinedFetchRequest.errorMessage);

    return (
        <main className={classes.mainContent}>
          <div className={classes.toolbar} />
          <Typography variant="h5" className={classes.mainTitle}>
            Materiaal
          </Typography>
          <Typography variant="body2" paragraph className={classes.mainSubHeader}>
            Reserveer hier materiaal van Lerkeveld!
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="subtitle2">
                Nieuwe reservatie
              </Typography>
              <MaterialForm
                reservations={reservations}
                items={items}
                refresh={fetchReservationsRequest.refresh}
                disabled={combinedFetchRequest.isFetching}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                Reservaties
              </Typography>
              <div style={{width: '100%', overflowX: 'auto'}}>
                <MaterialTable
                  reservations={reservations}
                  refresh={fetchReservationsRequest.refresh}
                  isFetching={combinedFetchRequest.isFetching}
                />
              </div>
            </Grid>
          </Grid>
        </main>
    );
}

export default MaterialView;
