import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import {
    LoadingSnackbarMessage,
    LoadingSnackbarOptions
} from '../components/LoadingSnackbar';


function useLoadingSnackbar(isLoading) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(() => {
        if (isLoading === true) {
            let key = enqueueSnackbar(<LoadingSnackbarMessage/>, LoadingSnackbarOptions);
            return () => closeSnackbar(key);
        }
    }, [isLoading, enqueueSnackbar, closeSnackbar])
}

export default useLoadingSnackbar;
