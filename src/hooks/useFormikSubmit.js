import { useState, useEffect } from 'react';
import * as api from '../api';

function useFormikSubmit(makeRequest, onSuccess, onError) {
    const [abortController, setAbortController] = useState(new AbortController());

    useEffect(() => {return () => abortController.abort();}, [abortController])

    const onSubmit = async (values, actions) => {
        const request = makeRequest(values, actions);
        try {
            const data = await api.request({
                signal: abortController.signal,
                ...request
            });
            setAbortController(new AbortController());
            if (onSuccess) await onSuccess(data, actions);
        } catch(err) {
            if (err !== null && err.name === 'AbortError')
                return
            setAbortController(new AbortController());
            if (err !== null && err.hasOwnProperty('message'))
                if (onError) await onError(err.message, actions);
        }
        actions.setSubmitting(false);
    }
    return onSubmit;
}

export default useFormikSubmit;
