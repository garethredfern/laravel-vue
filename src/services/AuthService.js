import axios from "axios";

axios.defaults.withCredentials = true;

export default {
  async login(payload) {
    try {
      await axios.get("http://localhost/sanctum/csrf-cookie");
      await axios.post("http://localhost/login", payload);
    } catch (error) {
      console.error(error);
    }
  },
  async logout() {
    try {
      await axios.post("http://localhost/logout");
    } catch (error) {
      console.error(error);
    }
  },
  async forgotPassword(payload) {
    await axios.get("http://localhost/sanctum/csrf-cookie");
    await axios.post("http://localhost/forgot-password", payload);
  },
  async getAuthUser() {
    return await axios.get("http://localhost/api/users/auth");
  },
  async resetPassword(payload) {
    await axios.get("http://localhost/sanctum/csrf-cookie");
    await axios.post("http://localhost/reset-password", payload);
  },
  async updatePassword(payload) {
    await axios.put("http://localhost/user/password", payload);
  },
  async registerUser(payload) {
    await axios.post("http://localhost/register", payload);
  },
  async resendVerification(payload) {
    await axios.get("http://localhost/sanctum/csrf-cookie");
    await axios.post(
      "http://localhost/email/verification-notification",
      payload
    );
  },
};
