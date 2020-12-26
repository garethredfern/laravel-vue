<template>
  <div class="p-5">
    <h2 class="font-bold text-xl">Dashboard</h2>
    <ul>
      <li>
        <button @click="resendVerification">Resend Verification</button>
      </li>
    </ul>
    <div class="flex space-x-2">
      <CreateUser />
      <UpdatePassword />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CreateUser from "@/components/CreateUser";
import UpdatePassword from "@/components/UpdatePassword";

axios.defaults.withCredentials = true;

export default {
  name: "Dashboard",
  components: {
    CreateUser,
    UpdatePassword,
  },
  methods: {
    async createUser() {
      await axios.post("http://localhost/api/users", {
        name: "Rey",
        email: "rey@jedi.com",
        password: "password",
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
