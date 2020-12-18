<template>
  <div>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
    <button @click="getUser">Get User</button>
    <button @click="createUser">Create User</button>
    <button @click="resetPassword">Reset Password</button>
    <button @click="updatePassword">Update Password</button>
    <button @click="forgotPassword">Forgot Password</button>
    <button @click="resendVerification">Resend Verification</button>
  </div>
</template>

<script>
import axios from "axios";

axios.defaults.withCredentials = true;

export default {
  name: "Nav",
  methods: {
    async login() {
      await axios.get("http://localhost:8080/sanctum/csrf-cookie");
      await axios.post("http://localhost:8080/login", {
        email: "garethr@hey.com",
        password: "password",
      });
    },
    async getUser() {
      const user = await axios.get("http://localhost:8080/api/users/1");
      console.debug(user);
    },
    async logout() {
      await axios.get("http://localhost:8080/logout");
    },
    async createUser() {
      await axios.post("http://localhost:8080/api/users", {
        name: "Test",
        email: "gareth.redfern@gmail.com",
        password: "password",
      });
    },
    async updatePassword() {
      await axios.post("http://localhost:8080/api/users/update/password", {
        currentPassword: "password",
        password: "password",
        passwordConfirmation: "password",
      });
    },
    async forgotPassword() {
      await axios.get("http://localhost:8080/sanctum/csrf-cookie");
      await axios.post("http://localhost:8080/forgot-password", {
        email: "gareth.redfern@gmail.com",
      });
    },
    async resetPassword() {
      await axios.get("http://localhost:8080/sanctum/csrf-cookie");
      await axios.post("http://localhost:8080/reset-password", {
        token:
          "40200e3499a393b83d93750591331be276b45b66cd49d5a2305d24e1f4e1e01a",
        password: "password",
        password_confirmation: "password",
        email: "gareth.redfern@gmail.com",
      });
    },
    async resendVerification() {
      await axios.get("http://localhost:8080/sanctum/csrf-cookie");
      await axios.post(
        "http://localhost:8080/email/verification-notification",
        {
          user: 1,
        }
      );
    },
  },
};
</script>
