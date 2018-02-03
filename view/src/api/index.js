import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/";

export function getStatisticByDate(partnerId, date) {
  const url = `api/v1/stats/${partnerId}?date=${date}`;
  return axios.get(url);
}

export function getStatisticByPeriod(partnerId, { from, to }) {
  const url = `api/v2/stats/${partnerId}/period?from=${from}&to=${to}`;
  return axios.get(url);
}
