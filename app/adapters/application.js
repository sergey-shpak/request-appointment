import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'request-appointment/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = ENV.APP.baseURL;
  namespace = 'client-portal-api';
  headers = {
    "accept": "application/vnd.api+json",
    "api-version": "2020-01-01",
    "application-build-version": "0.0.1",
    "application-platform": "web"
  };
}