import { useEffect } from 'react';
import { useSnackbar } from 'notistack';


function useEnqueueSnackbar(message) {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    useEffect(() => {
        if (message !== null) {
            let key = enqueueSnackbar(message);
            return () => closeSnackbar(key);
        }
    }, [message, enqueueSnackbar, closeSnackbar])
}

export default useEnqueueSnackbar;
