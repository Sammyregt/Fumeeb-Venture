import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.mode === "development" ? "http://localhost:5000/api" : "/api",
	withCredentials: true, // send cookies to the server
});

<<<<<<< HEAD
export default axiosInstance;
=======
export default axiosInstance;
>>>>>>> d30b5657f5e8286e8bb5aad29002516481a7dcb7
