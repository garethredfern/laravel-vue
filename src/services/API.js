/*
 * This is the initial API interface
 * we set the base URL for the API
 ? Both request & response are logged to the console.
 ! Remove the console logs for production.
*/

import axios from "axios";
import store from "@/store/index";

export const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL + "/api",
  withCredentials: true, // required to handle the CSRF token
});

/*
 * Add a response interceptor
 */
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response.status === 401 || error.response.status === 419) {
      store.dispatch("auth/logout");
    }
    return Promise.reject(error.response);
  }
);
