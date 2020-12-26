<template>
  <header class="p-5 bg-blue-100">
    <nav class="container mx-auto flex justify-between items-center">
      <router-link to="/">Home</router-link>
      <div class="flex space-x-4" v-if="authUser">
        <router-link to="/dashboard">Dashboard</router-link>
        <Logout />
      </div>
      <router-link to="/login">Login</router-link>
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
