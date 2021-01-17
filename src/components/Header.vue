<template>
  <header class="p-5 text-white bg-blue-400">
    <nav class="container flex items-center justify-between mx-auto">
      <div v-if="authUser" class="flex items-center space-x-5">
        <router-link to="/dashboard">
          <HomeIcon class="w-6 h-6 text-white" />
          <span class="sr-only">Dashboard</span>
        </router-link>
        <router-link to="/users" v-if="isAdmin">Users</router-link>
      </div>
      <router-link to="/" v-else>Home</router-link>
      <div class="inline-flex items-center space-x-5" v-if="authUser">
        <router-link to="/user">{{ authUser.name }}</router-link>
        <Logout />
      </div>
      <router-link to="/login" v-else>Login</router-link>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import Logout from "@/components/Logout";
import HomeIcon from "@/components/icons/HomeIcon";

export default {
  name: "Header",
  components: {
    Logout,
    HomeIcon,
  },
  computed: {
    ...mapGetters("auth", ["authUser", "isAdmin"]),
  },
};
</script>
