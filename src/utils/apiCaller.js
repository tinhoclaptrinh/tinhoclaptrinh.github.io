import axios from'axios';
import * as Config from './../constants/Config';

export const callApi = (endpoint = '', method='GET', body = {}) => {
  const url = endpoint ? Config.API_URL + "/" + endpoint : Config.API_URL

  return axios({
    method,
    url,
    data: body
  });
};
