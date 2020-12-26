<template>
  <div class="p-5">
    <h2 class="font-bold text-xl">Dashboard</h2>
    <ul>
      <li>
        <button @click="createUser">Create User</button>
      </li>
      <li>
        <button @click="resetPassword">Reset Password</button>
      </li>
      <li>
        <button @click="updatePassword">Update Password</button>
      </li>
      <li>
        <button @click="resendVerification">Resend Verification</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

axios.defaults.withCredentials = true;

export default {
  name: "Dashboard",
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
