import React, { useState, useCallback } from 'react';

import BreadTable from './BreadTable';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useViewStyles from '../../assets/jss/useViewStyles';
import useLoadingSnackbar from '../../hooks/useLoadingSnackbar';
import useEnqueueSnackbar from '../../hooks/useEnqueueSnackbar';
import useFetch from '../../hooks/useFetch';
import useCombineFetch from '../../hooks/useCombineFetch';
import * as utils from '../../utils';


function BreadView(props) {
    const classes = useViewStyles();

    const [items, setItems] = useState([]);
    const [orderDates, setOrderDates] = useState([]);

    // FETCHING
    const fetchOrderDatesRequest = useFetch(
        {method: 'GET', path: '/bread/'},
        useCallback((data) => {
            const orderDates = data['order_dates'].map(orderDate => {
                return Object.assign(
                    {},
                    orderDate,
                    {date: new Date(orderDate.date)}
                )
            });
            setOrderDates(utils.sorted(orderDates, (o) => o.date));
        }, []),
    )
    const fetchItemsRequest = useFetch(
        {method: 'GET', path: '/bread/type'},
        useCallback((data) => {setItems(data.items);}, []),
    )
    const combinedFetchRequest = useCombineFetch([
        fetchOrderDatesRequest,
        fetchItemsRequest,
    ]);

    useLoadingSnackbar(combinedFetchRequest.isInitialFetch);
    useEnqueueSnackbar(combinedFetchRequest.errorMessage);

    return (
        <main className={classes.mainContent}>
          <div className={classes.toolbar} />
          <Typography variant="h5" className={classes.mainTitle}>
              Brood en Melk
          </Typography>
          <Typography variant="body2" paragraph className={classes.mainSubHeader}>
            Bestel hier wekelijks je brood tot en met vrijdag!
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle2">
                Reservaties
              </Typography>
              <div style={{width: '100%', overflowX: 'auto'}}>
                <BreadTable
                  orderDates={orderDates}
                  items={items}
                  refresh={fetchOrderDatesRequest.refresh}
                  isFetching={combinedFetchRequest.isFetching}
                />
              </div>
            </Grid>
          </Grid>
        </main>
    );
}

export default BreadView;
