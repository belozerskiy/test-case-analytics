import axios from "axios";

export function getStatisticByDate(partnerId, date) {
  const url = `/stats/${partnerId}?date=${date}`;
  return axios.get(url);
}

export function getStatisticByPeriod(partnerId, { from, to }) {
  const url = `/stats/${partnerId}/period?from=${from}&to=${to}`;
  return axios.get(url);
}
