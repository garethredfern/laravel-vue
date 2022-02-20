/*
 * This is the initial API interface
 * we set the base URL for the API
 */

import axios from "axios";

const apiUrl = import.meta.env.VITE_APP_API_URL;

export const apiClient = axios.create({
  baseURL: apiUrl + "/api",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true, // required to handle the CSRF token
});

/*
 * Add a response interceptor
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && [401, 419].includes(error.response.status)) {
      console.error("User not authorized, login failed with API");
    }
    return Promise.reject(error);
  }
);
