import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://223.130.134.101/api',
  timeout: 1000,
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    "Content-Type": "application/json"
  }
}, {headers: {'Access-Control-Allow-Origin': '*'}});

