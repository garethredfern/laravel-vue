<template>
  <header class="p-5 text-white bg-blue-400">
    <nav class="container flex items-center justify-between mx-auto">
      <router-link to="/dashboard" v-if="authUser">Dashboard</router-link>
      <router-link to="/" v-else>Home</router-link>
      <div class="flex space-x-4" v-if="authUser">
        <Logout />
      </div>
      <router-link to="/login" v-else>Login</router-link>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import Logout from "@/components/Logout";

export default {
  name: "Header",
  components: {
    Logout,
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
};
</script>
