import axios from "axios";

axios.defaults.withCredentials = true;

const apiUrl = process.env.VUE_APP_API_URL;

export default {
  async login(payload) {
    await axios.get(`${apiUrl}/sanctum/csrf-cookie`);
    await axios.post(`${apiUrl}/login`, payload);
  },
  async logout() {
    await axios.post(`${apiUrl}/logout`);
  },
  async forgotPassword(payload) {
    await axios.get(`${apiUrl}/sanctum/csrf-cookie`);
    await axios.post(`${apiUrl}/forgot-password`, payload);
  },
  async getAuthUser() {
    return await axios.get(`${apiUrl}/api/users/auth`);
  },
  async resetPassword(payload) {
    await axios.get(`${apiUrl}/sanctum/csrf-cookie`);
    await axios.post(`${apiUrl}/reset-password`, payload);
  },
  async updatePassword(payload) {
    await axios.put(`${apiUrl}/user/password`, payload);
  },
  async registerUser(payload) {
    await axios.post(`${apiUrl}/register`, payload);
  },
  async resendVerification(payload) {
    await axios.post(`${apiUrl}/email/verification-notification`, payload);
  },
};
