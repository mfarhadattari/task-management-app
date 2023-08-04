import axios from "axios";

const serverRequest = axios.create({
  baseURL: "https://task-management-app-kappa.vercel.app",
});
const useServer = () => {
  return { serverRequest };
};

export default useServer;
