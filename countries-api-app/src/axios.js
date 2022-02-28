import axios from "axios";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/plain",
  },
};
const instance = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  https: config,
});

export default instance;