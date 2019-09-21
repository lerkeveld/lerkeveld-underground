import React, { useCallback, useReducer } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import MaterialDeleteDialog from './MaterialDeleteDialog';
import MaterialTableHead from './MaterialTableHead';
import MaterialTableRow from './MaterialTableRow';
import EmptyMaterialTableRow from './EmptyMaterialTableRow';

import useRequest from '../../hooks/useRequest';
import useEnqueueSnackbar from '../../hooks/useEnqueueSnackbar';


const INITIAL_STATE = {
    dialogOpen: false,
    isSubmitting: false,
    selectedReservation: {},
    request: null,
    message: null,
};

function reducer(state, action) {
    switch (action.type) {
        case 'DELETE':
            return {
                ...state,
                dialogOpen: true,
                selectedReservation: action.row,
            }
        case 'DELETE-DIALOG-SUBMIT':
            return {
                ...state,
                dialogOpen: false,
                isSubmitting: true,
                request: {
                    method: 'DELETE',
                    path: '/materiaal/' + state.selectedReservation.id,
                },
            }
        case 'FETCH-SUCCESS':
            return {...INITIAL_STATE, message: action.message}
        case 'FETCH-ERROR':
            return {...INITIAL_STATE, message: state.message}
        case 'FETCH-ERROR-MESSAGE':
            return {...state, message: action.message}
        case 'RESET':
            return INITIAL_STATE
        default:
            throw new Error();
    }
}

function MaterialTable({
    reservations = [],
    isFetching = false,
    refresh,
    ...props
}) {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const hasNoReservations = reservations === null || reservations.length === 0;

    // REQUEST
    useRequest(state.request, {
        onSuccess: useCallback(() => {
            dispatch({type: 'FETCH-SUCCESS', message: 'Reservatie geannuleerd'});
            refresh();
        }, [refresh]),
        onError: useCallback(() => dispatch({type: 'FETCH-ERROR'}), []),
        setErrorMessage: useCallback((msg) => {
            dispatch({type: 'FETCH-ERROR-MESSAGE', message: msg});
        }, []),
    });

    useEnqueueSnackbar(state.message);

    return (
        <>
          <Table size="small">
            <MaterialTableHead />
            <TableBody>
              { hasNoReservations
                 ? <EmptyMaterialTableRow
                     prefix={isFetching ? null : '/'}
                     message={isFetching ? null : 'Geen reservaties'}
                   />
                 : null
              }
              {reservations.map(row => {return (
                  <MaterialTableRow
                    key={row.id}
                    row={row}
                    disabledDelete = {isFetching || state.isSubmitting || !row.own}
                    isSubmittingSelectedDelete={
                      state.isSubmitting &&
                      state.selectedReservation !== null &&
                      state.selectedReservation.hasOwnProperty('id') &&
                      state.selectedReservation.id === row.id
                    }
                    onDeleteSelected={() => {
                      dispatch({type: 'DELETE', row: row})
                    }}
                  />
              )})}
            </TableBody>
          </Table>
          <MaterialDeleteDialog 
            open={state.dialogOpen}
            onAccept={() => dispatch({type: 'DELETE-DIALOG-SUBMIT'})}
            onClose={() => dispatch({type: 'RESET'})}
            reservation={state.selectedReservation}
          />
        </>
    );
}

export default MaterialTable;
