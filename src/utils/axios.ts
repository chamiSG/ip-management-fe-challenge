import axios from "axios";

const accessToken = localStorage.getItem('access-token')
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Cache-Control': 'public, s-maxage=10, stale-while-revalidate=59',
    'accept': 'application/json',
    'Authorization': 'Bearer '+ accessToken,
  },
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.status === 401) {
      console.log('api error', error)
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;