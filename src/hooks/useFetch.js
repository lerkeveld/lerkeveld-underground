import { useState, useCallback } from 'react';
import useRequest from './useRequest';

function useFetch(initialRequest, onSuccess, onError) {
    const [request, setRequest] = useState(initialRequest);
    const [isFetching, setFetching] = useState(true);
    const [count, setCount] = useState(0);
    const [errorMessage, setErrorMessage] = useState(null);

    useRequest(request, {
        setErrorMessage: setErrorMessage,
        setFetching: setFetching,
        onSuccess: onSuccess,
        onError: onError,
    });

    const refresh = useCallback(() => {
        setRequest((request) => Object.assign({}, request));
        setCount((count) => count + 1);
    }, []);

    return {
        isFetching: isFetching,
        isInitialFetch: isFetching && count === 0,
        count: count,
        errorMessage: errorMessage,
        refresh: refresh,
    }
}

export default useFetch;
