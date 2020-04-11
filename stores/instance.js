import axios from "axios";

export const instance = axios.create({
  baseURL: "http://167.172.181.131/api/",
});
