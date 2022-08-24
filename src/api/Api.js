import axios from "axios";
//fetchUser
export function userApi() {
  return axios
    .get(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"
    )
    .then((res) => res.data.users);
}
//fetchToken
export function tokenApi() {
  return axios
    .get("https://frontend-test-assignment-api.abz.agency/api/v1/token")
    .then((res) => res.data);
}
//createUser
export function postApi(users) {
  return axios
    .post(`https://frontend-test-assignment-api.abz.agency/api/v1/users`, users)
    .then((res) => res.data);
}
export function fetchPosition() {
  return axios
    .get(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
    .then((res) => res.data.positions);
}
