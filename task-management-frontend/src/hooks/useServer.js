import axios from "axios";

const serverRequest = axios.create({
  baseURL: "http://localhost:3000",
});
const useServer = () => {
  return { serverRequest };
};

export default useServer;
