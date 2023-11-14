import { get } from "./httpService";

const BASE_URL = "https://react-elections-web-afonseca.glitch.me/api";

export async function apiGetAllData() {
  return await get(`${BASE_URL}`);
}

export async function apiGetCity(id) {
  return await get(`${BASE_URL}/cities?id=${id}`);
}

export async function apiGetElection(cityId) {
  return await get(`${BASE_URL}/election?cityId=${cityId}`);
}

export async function apiGetAllCandidates() {
  return await get(`${BASE_URL}/candidates`);
}
