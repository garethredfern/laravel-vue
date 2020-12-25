<template>
  <div>
    <button @click="getUser">Get User</button>
    <button @click="createUser">Create User</button>
    <button @click="resetPassword">Reset Password</button>
    <button @click="updatePassword">Update Password</button>
    <button @click="resendVerification">Resend Verification</button>
  </div>
</template>

<script>
import axios from "axios";

axios.defaults.withCredentials = true;

export default {
  name: "Nav",
  methods: {
    async createUser() {
      await axios.post("http://localhost/api/users", {
        name: "Rey",
        email: "rey@jedi.com",
        password: "password",
      });
    },
    async updatePassword() {
      await axios.post("http://localhost/api/users/update/password", {
        currentPassword: "password",
        password: "password",
        passwordConfirmation: "password",
      });
    },
    async resetPassword() {
      await axios.get("http://localhost/sanctum/csrf-cookie");
      await axios.post("http://localhost/reset-password", {
        token:
          "40200e3499a393b83d93750591331be276b45b66cd49d5a2305d24e1f4e1e01a",
        password: "password",
        password_confirmation: "password",
        email: "luke@jedi.com",
      });
    },
    async resendVerification() {
      await axios.get("http://localhost/sanctum/csrf-cookie");
      await axios.post("http://localhost/email/verification-notification", {
        user: 1,
      });
    },
  },
};
</script>
