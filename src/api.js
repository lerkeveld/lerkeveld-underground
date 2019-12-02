const API_URL = process.env.REACT_APP_API_URL;
const CREDENTIALS = process.env.REACT_APP_CREDENTIALS;

////////////////////
// Fetch wrappers //
////////////////////
const UNEXPECTED_ERROR = 'Unexpected error, contact Lerkeveld IT';
const FETCH_ERROR = 'Sorry, the server could not be reached';

const INVALID_CREDENTIALS_STATUS = new Set([
    401,
    422
]);

async function fetchWrapper(path, init, retryCredentials = true) {
    // try fetching
    let response;
    try {
        response = await fetch(path, init);
    } catch (err) {
        if (err.name === 'AbortError'){
            throw(err);
        }
        throw new Error(FETCH_ERROR);
    }

    // retry credentials?
    if (retryCredentials === true &&
        INVALID_CREDENTIALS_STATUS.has(response.status)) {
        await refreshCredentials();
        return fetchWrapper(path, init, false); 
    }

    // decode response
    let data;
    try {
        data = await response.json();
    } catch (err) {
        if (err !== null && err.name === 'AbortError')
            throw err;
        throw new Error(UNEXPECTED_ERROR);
    }

    // validation
    if (data === null) {
        throw new Error(UNEXPECTED_ERROR);
    }
    if (data.success !== true) {
        if (data.hasOwnProperty('msg'))
            throw new Error(data.msg);
        throw new Error(UNEXPECTED_ERROR);
    }

    return data;
}

export async function request({
    path,                      // relative path to API_URL
    refresh = false,           // use refresh or access token
    retryCredentials = true,   // retry credentials if UNAUTHORIZED
    method = 'GET',
    signal = null,
    data = null,
    ...rest                    // rest will be passed on to fetch init arg
}) {
    let body = null;
    let headers = new Headers({
        'X-CSRF-TOKEN' : window.localStorage.getItem(
            refresh === true
              ? 'r-csrf-token'
              : 'a-csrf-token'
        )
    });
    if (data !== null) {
        headers.set('Content-Type', 'application/json');
        body = JSON.stringify(data);
    }

    return fetchWrapper(
        API_URL + path,
        {
            method: method,
            headers: headers,
            body: body,
            credentials: CREDENTIALS,
            signal: signal,
            ...rest
        },
        retryCredentials,
    );
}

export async function get(args) {
    return request({method: 'GET', ...args});
}

export async function post(args) {
    return request({method: 'POST', ...args});
}

export async function put(args) {
    return request({method: 'PUT', ...args})
}

export async function patch(args) {
    return request({method: 'PATCH', ...args})
}

export async function del(args) {
    return request({method: 'DELETE', ...args})
}


/////////////////////////
// Credential managing //
/////////////////////////
export function hasCredentials() {
    return (
        window.localStorage['a-csrf-token'] &&
        window.localStorage['r-csrf-token']
  )
}

export function setCredentials(data) {
    window.localStorage.setItem('a-csrf-token', data['a-csrf-token']);
    window.localStorage.setItem('r-csrf-token', data['r-csrf-token']);
}

export async function removeCredentials() {
    window.localStorage.removeItem('a-csrf-token');
    window.localStorage.removeItem('r-csrf-token');

    // (optional) clear HTTPOnly cookies
    await post({path: '/auth/logout', retryCredentials: false});
}

export async function refreshCredentials() {
    // try fetching
    let response;
    try {
        response = await fetch(
            API_URL + '/auth/refresh',
            {
              method: 'POST',
              headers: new Headers({
                  'X-CSRF-TOKEN' : window.localStorage.getItem('r-csrf-token')
              }),
              credentials: CREDENTIALS
            });
    } catch {
        throw new Error(FETCH_ERROR);
    }

    // still invalid?
    if (INVALID_CREDENTIALS_STATUS.has(response.status)) {
        removeCredentials();
        throw new Error('Authentication failure, please refresh');
    }

    // decode response
    let data;
    try {
        data = await response.json();
    } catch {
        throw new Error(UNEXPECTED_ERROR);
    }

    window.localStorage.setItem('a-csrf-token', data['a-csrf-token']);
}
