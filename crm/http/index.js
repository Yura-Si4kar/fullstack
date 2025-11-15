import axios from 'axios';

const $host = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MY_API_URL,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});

export { $host };