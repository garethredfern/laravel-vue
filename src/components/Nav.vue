<template>
  <div>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
    <button @click="getUser">User</button>
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
      await axios.post("http://localhost:8080/logout");
    },
  },
};
</script>
