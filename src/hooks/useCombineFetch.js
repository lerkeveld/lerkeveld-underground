import * as utils from '../utils';

function useCombineFetch(requests) {
    // isFetching
    const isFetching = requests.map(r => r.isFetching).some((b) => b === true);

    // isInitialFetch
    const isInitialFetch = requests.map(r => r.isInitialFetch).some((b) => b === true);

    // errorMessage
    const errorMessage = utils.findFirstNotNull(requests.map(r => r.errorMessage));

    return {
        isFetching: isFetching,
        isInitialFetch: isInitialFetch,
        errorMessage: errorMessage,
    }
}

export default useCombineFetch;
