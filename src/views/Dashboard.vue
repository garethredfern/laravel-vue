<template>
  <div class="p-5">
    <h2 class="font-bold text-xl">Dashboard</h2>
    <ul>
      <li>
        <button @click="createUser">Create User</button>
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
    async resendVerification() {
      await axios.get("http://localhost/sanctum/csrf-cookie");
      await axios.post("http://localhost/email/verification-notification", {
        user: 1,
      });
    },
  },
};
</script>
