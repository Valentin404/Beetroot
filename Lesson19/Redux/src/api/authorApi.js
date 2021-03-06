import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = process.env.API_URL + "/authors/";
//const baseUrl = process.env.REACT_APP_APIURL + "/authors/";
const { apiurl } = require("../../package.json");
const baseUrl = apiurl + "/authors/";

export function getAuthors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
