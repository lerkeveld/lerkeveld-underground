const API_URL = process.env.REACT_APP_API_URL;
const CREDENTIALS = process.env.REACT_APP_CREDENTIALS;

////////////////////
// Fetch wrappers //
////////////////////

const INVALID_CREDENTIALS_STATUS = new Set([
    401,
    422
]);

function wrapper(path, init, retryCredentials = true) {
    return fetch(path, init)
        .catch(error => {
            return Promise.reject(new Error('Sorry, the server could not be reached'));
        })
        .then(response => {
            if (retryCredentials === true && INVALID_CREDENTIALS_STATUS.has(response.status)) {
                return refreshCredentials()
                    .then(() => wrapper(path, init, false))
                    .catch((error) => Promise.reject(new Error(error.message)));
            }
            return response.json();
        })
        .then(data =>
            data.success === true 
              ? Promise.resolve(data)
              : Promise.reject(new Error(data.msg))
        )
}

export function get({path, refresh = false, retryCredentials = true}) {
    return wrapper(
        API_URL + path,
        {
            method: 'GET',
            headers: new Headers({
                'X-CSRF-TOKEN' : window.localStorage.getItem(
                    refresh === true
                      ? 'r-csrf-token'
                      : 'a-csrf-token'
                )
            }),
            credentials: CREDENTIALS
        },
        retryCredentials
    );
}

export function post({path, data, refresh = false, retryCredentials = true}) {
    return wrapper(
        API_URL + path,
        {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN' : window.localStorage.getItem(
                    refresh === true
                      ? 'r-csrf-token'
                      : 'a-csrf-token'
                )
            }),
            credentials: CREDENTIALS,
            body: JSON.stringify(data)
        },
        retryCredentials
    );
}

export function del({path, refresh = false, retryCredentials = true}) {
    return wrapper(
        API_URL + path,
        {
            method: 'DELETE',
            headers: new Headers({
                'X-CSRF-TOKEN' : window.localStorage.getItem(
                    refresh === true
                      ? 'r-csrf-token'
                      : 'a-csrf-token'
                )
            }),
            credentials: CREDENTIALS
        },
        retryCredentials
    );
}


/////////////////////////
// Credential managing //
/////////////////////////
export function hasCredentials() {
  return Promise.resolve(
      window.localStorage['a-csrf-token'] &&
      window.localStorage['r-csrf-token']
  )
}

export function setCredentials(data) {
  window.localStorage.setItem('a-csrf-token', data['a-csrf-token']);
  window.localStorage.setItem('r-csrf-token', data['r-csrf-token']);
  return Promise.resolve();
}

export function removeCredentials() {
  window.localStorage.removeItem('a-csrf-token');
  window.localStorage.removeItem('r-csrf-token');

  // (optional) clear HTTPOnly cookies
  post({path: '/auth/logout', retryCredentials: false})
  return Promise.resolve()
}

export function refreshCredentials() {
  return fetch(
      API_URL + '/auth/refresh',
      {
        method: 'POST',
        headers: new Headers({
            'X-CSRF-TOKEN' : window.localStorage.getItem('r-csrf-token')
        }),
        credentials: CREDENTIALS
      }
  ).catch(error => {
      return Promise.reject(new Error('Sorry, the server could not be reached'));
  }).then(response => {
      if (INVALID_CREDENTIALS_STATUS.has(response.status)) {
        return removeCredentials().then(() => {
            return Promise.reject(new Error('Authentication failure, please refresh'))
        });
      }
      return response.json()
  }).then(data => {
      window.localStorage.setItem('a-csrf-token', data['a-csrf-token']);
      return Promise.resolve()
  })
}
