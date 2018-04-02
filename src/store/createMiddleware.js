const middleware = api => ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  if (!action.promise) {
    return next(action);
  }
  const [request, success, failure] = action.types;
  next({ type: request });
  return action
    .promise(api)
    .then(({ data = {}, headers = {} }) =>
      next({ type: success, response: data, headers })
    )
    .catch(({ message, request, response }) => {
      if (response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // response.data
        // response.status
        // response.headers
        next({ type: 'REQUEST_FAILURE', error: response });
        next({ type: failure, error: response });
      } else if (request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        next({ type: 'REQUEST_FAILURE', error: request });
        next({ type: failure, error: request });
      } else {
        // Something happened in setting up the request that triggered an Error
        next({ type: 'REQUEST_FAILURE', error: message });
        next({ type: failure, error: message });
      }
    });
};

export default middleware;
