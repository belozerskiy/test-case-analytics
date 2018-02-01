import axios from "axios";

export function getStatisticByDate(partnerId, date) {
  const url = `api/v1/stats/${partnerId}?date=${date}`;
  return axios.get(url);
}

export function getStatisticByPeriod(partnerId, { from, to }) {
  const url = `api/v1/stats/${partnerId}/period?from=${from}&to=${to}`;
  return axios.get(url);
}
