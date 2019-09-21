import { useEffect } from 'react';
import * as api from '../api';

function useRequest(request, {
    setErrorMessage,
    setFetching,
    onSuccess,
    onError
}) {
    useEffect(() => {
        if (request === null) return;
        if (setErrorMessage) setErrorMessage(null);
        let abortController = new AbortController();
        const doFetch = async () => {
            if (setFetching) setFetching(true);
            try {
                let data = await api.request({
                    signal: abortController.signal,
                    ...request
                });
                if (onSuccess) await onSuccess(data);
            } catch(err) {
                if (err !== null && err.name === 'AbortError')
                    return
                if (err !== null && err.hasOwnProperty('message'))
                    if (setErrorMessage) setErrorMessage(err.message);
                    if (onError) await onError();
            }
            if (setFetching) setFetching(false);
        }
        doFetch();
        return () => {abortController.abort();}
    }, [request, setErrorMessage, setFetching, onSuccess, onError])
}

export default useRequest;
