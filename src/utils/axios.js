import axios from "axios";

const localURL = "https://mockserver-vfmt.onrender.com/";

const instance = axios.create({
  baseURL: localURL,
});

instance.interceptors.response.use((res) => {
  return res;
});

export default instance;
