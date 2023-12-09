import axios from "axios";

const localURL = "http://localhost:3001";

const instance = axios.create({
  baseURL: localURL,
});

instance.interceptors.response.use((res) => {
  return res;
});

export default instance;
