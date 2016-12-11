import getEnvironment from '../constants/environment';

const ENV = getEnvironment();

export default function callApi(endpoint, method = 'get', body) {
  console.log(`${ENV.BASE_URL_WS}${endpoint}`);
  return fetch(`${ENV.BASE_URL_WS}${endpoint}`, {
    headers: { 'content-type': 'application/json' },
    method,
    body: JSON.stringify(body),
  })
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return json;
    })
    .then(
      response => response,
      error => error,
    );
}
