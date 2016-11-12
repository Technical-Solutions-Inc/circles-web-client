import 'isomorphic-fetch';

const BASE_URI = !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
  ? 'api/'
  : 'http://circles-api-live.wpifpxm8xm.us-west-1.elasticbeanstalk.com/api/';

/**
 * Base method for making requests to the server.
 * @param uriFragment
 * @param method
 * @param data
 * @returns {Promise} .then() returns `result`
 */
function makeRequest(uriFragment='', method='GET', data) {
  const requestOpts = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

  if (data) { requestOpts.body = JSON.stringify(data) }

  return fetch(`${BASE_URI}${uriFragment}`, requestOpts)
}

export default makeRequest;

export function ping() {
  return makeRequest('ping')
}

export function getEvents(userId=1) {
  return makeRequest(`events?user_id=${userId}`);
}
