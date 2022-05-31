
import axios from "axios";

export const api = axios.create({
  baseURL: `http://${process.env.REACT_APP_API_URL}/api`,
  headers: { "X-Custom-Header": "test application"},
  timeout: 2000,
});