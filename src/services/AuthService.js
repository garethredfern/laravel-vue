import axios from "axios";

const apiUrl = import.meta.env.VITE_APP_API_URL;

export const authClient = axios.create({
  baseURL: apiUrl,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true, // required to handle the CSRF token
});

/*
 * Add a response interceptor
 */
authClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && [401, 419].includes(error.response.status)) {
      console.info("[401, 419]: User not authorized, login failed with API.");
    }
    return Promise.reject(error);
  }
);

export default {
  async login(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/login", payload);
  },
  logout() {
    return authClient.post("/logout");
  },
  async forgotPassword(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/forgot-password", payload);
  },
  getAuthUser() {
    return authClient.get("/api/user");
  },
  async resetPassword(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/reset-password", payload);
  },
  async updatePassword(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.put("/api/user/password", payload);
  },
  async registerUser(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.post("/register", payload);
  },
  sendVerification(payload) {
    return authClient.post("/email/verification-notification", payload);
  },
  async updateUser(payload) {
    await authClient.get("/sanctum/csrf-cookie");
    return authClient.put("/api/user", payload);
  },
};
