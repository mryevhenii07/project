import axios from "axios";

const BASE_URL = "https://frontend-test-assignment-api.abz.agency/api/v1/";

export function fetchUser(count) {
  return axios
    .get(`${BASE_URL}users?page=1&count=${count}`)
    .then((response) => response.data.users);
}

export function fetchToken() {
  return axios.get(`${BASE_URL}token`).then((response) => response.data.token);
}

export function createUser(users) {
  return axios
    .post(`${BASE_URL}users`, users)
    .then((response) => response.data);
}
export function fetchPosition() {
  return axios
    .get(`${BASE_URL}positions`)
    .then((response) => response.data.positions);
}
