export function post({url, data, onSuccess, onError}) {
    fetch(`${process.env.REACT_APP_API_URL || '/api'}${url}`, {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(data)
    }).then(response => response.json())
      .then(data => {
          data.success === true
            ? onSuccess(data)
            : onError(new Error(data.msg))
      })
      .catch(err => onError(err));
}
