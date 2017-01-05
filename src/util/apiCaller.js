import getEnvironment from '../constants/environment';

const ENV = getEnvironment();
export default function callApi(endpoint, method = 'get', body) {
  return fetch(`${ENV.BASE_URL_WS}${endpoint}`, {
    headers: { 'content-type': 'application/json' },
    method,
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(response => response)
    .catch(error => ({ error }));
}
