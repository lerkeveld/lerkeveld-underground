import React, { useReducer, useCallback } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';

import AddBreadDialog from './AddBreadDialog';
import BreadTableHead from './BreadTableHead';
import BreadTableRow from './BreadTableRow';
import EmptyBreadTableRow from './EmptyBreadTableRow';

import useRequest from '../../hooks/useRequest';
import useEnqueueSnackbar from '../../hooks/useEnqueueSnackbar';


const INITIAL_STATE = {
    dialogOpen: false,
    isSubmitting: false,
    selectedAction: '',
    selectedGlobal: false,
    selectedOrderDate: {},
    request: null,
    message: null,
};

function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                dialogOpen: true,
                selectedAction: 'ADD',
                selectedGlobal: action.global,
                selectedOrderDate: action.orderDate,
                successMessage: 'Brood toegevoegd!',
            }
        case 'CLEAR':
            return {
                ...state,
                isSubmitting: true,
                selectedAction: 'CLEAR',
                selectedGlobal: action.global,
                selectedOrderDate: action.orderDate,
                request: {
                    method: 'DELETE',
                    path: '/bread/' + (action.global ? 'all' : action.orderDate.id),
                },
                successMessage: 'Bestelling verwijderd',
            }
        case 'ADD-DIALOG-SUBMIT':
            return {
                ...state,
                dialogOpen: false,
                isSubmitting: true,
                request: {
                    method: 'PATCH',
                    path: '/bread/' + (state.selectedGlobal ? 'all' : state.selectedOrderDate.id),
                    data: {items: [action.item]},
                },
            }
        case 'FETCH-SUCCESS':
            return {...INITIAL_STATE, message: state.successMessage}
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

function BreadTable({
    refresh,
    isFetching,
    orderDates = [],
    items = [],
    ...props
}) {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    const hasNoOrders = orderDates === null || orderDates.length === 0;
    const isSubmittingGlobal = state.isSubmitting && state.selectedGlobal;

    // REQUEST
    useRequest(state.request, {
        onSuccess: useCallback(() => {
            dispatch({type: 'FETCH-SUCCESS'});
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
            <BreadTableHead
                disabled={isFetching || state.isSubmitting || hasNoOrders}
                isSubmittingAddGlobal={isSubmittingGlobal && state.selectedAction === 'ADD'}
                isSubmittingClearGlobal={isSubmittingGlobal && state.selectedAction === 'CLEAR'}
                onAddGlobal={() => dispatch({type: 'ADD', global: true})}
                onDeleteGlobal={() => dispatch({type: 'CLEAR', global: true})}
            />
            <TableBody>
              { hasNoOrders
                 ? <EmptyBreadTableRow
                     prefix={isFetching ? null : '/'}
                     message={isFetching ? null : 'Geen bestellingen mogelijk'}
                   />
                 : null
              }
              {orderDates.map(row => {return (
                  <BreadTableRow
                      key={row.id}
                      row={row}
                      disabledAdd={
                          isFetching ||
                          state.isSubmitting || 
                          !row.is_editable
                      }
                      disabledClear={
                          isFetching ||
                          state.isSubmitting || 
                          !row.is_editable || 
                          row.orders.length === 0
                      }
                      isSubmittingSelectedAdd={
                          state.isSubmitting &&
                          state.selectedAction === 'ADD' &&
                          state.selectedGlobal === false &&
                          row.id === state.selectedOrderDate.id
                      }
                      isSubmittingSelectedClear={
                          state.isSubmitting &&
                          state.selectedAction === 'CLEAR' &&
                          state.selectedGlobal === false &&
                          row.id === state.selectedOrderDate.id
                      }
                      onAddSelected={() => dispatch({type: 'ADD', global: false, orderDate: row})}
                      onClearSelected={() => dispatch({type: 'CLEAR', global: false, orderDate: row})}
                  />
              )})}
            </TableBody>
          </Table>
          <AddBreadDialog
            open={state.dialogOpen}
            onSelect={(item) => {
                dispatch({type: 'ADD-DIALOG-SUBMIT', item: item});
            }}
            onClose={() => dispatch({type: 'RESET'})}
            items={items}
            selectedOrderDate={state.selectedOrderDate}
            selectedGlobal={state.selectedGlobal}
          />
        </>
    );
}

export default BreadTable;
