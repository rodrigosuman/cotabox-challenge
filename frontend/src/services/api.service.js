import axios from "axios";

import { baseURL } from "../configs/api.config.json";

const api = axios.create({
  baseURL,
});

export default api;
