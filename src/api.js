const API_URL = process.env.REACT_APP_API_URL;
const CREDENTIALS = process.env.REACT_APP_CREDENTIALS;

export function get({path, refresh = false}) {
    return fetch(API_URL + path, {
        method: 'GET',
        headers: new Headers({
            'X-CSRF-TOKEN' : window.localStorage.getItem(
                refresh === true
                  ? 'r-csrf-token'
                  : 'a-csrf-token'
            )
        }),
        credentials: CREDENTIALS
    }).catch(error => Promise.reject(new Error('Sorry, the server could not be reached')))
      .then(response => response.json())
      .then(data => {
          return data.success === true
            ? Promise.resolve(data)
            : Promise.reject(new Error(data.msg))
      })
}

export function post({path, data, refresh = false}) {
    return fetch(API_URL + path, {
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
    }).catch(error => Promise.reject(new Error('Sorry, the server could not be reached')))
      .then(response => response.json())
      .then(data => {
          return data.success === true
            ? Promise.resolve(data)
            : Promise.reject(new Error(data.msg))
      })
}
