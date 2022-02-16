<script setup>
import { computed } from "vue";
import { useAuth } from "@/stores/authStore";

const authStore = useAuth();
const showLogin = computed(() => !authStore.loggedIn && !authStore.authLoading);
</script>

<template>
  <header class="flex space-x-4 bg-slate-100 p-5 border-b-2">
    <nav class="space-x-5">
      <RouterLink to="/">Home</RouterLink>
    </nav>
    <ul v-if="authStore.loggedIn" class="flex space-x-4">
      <li>{{ authStore.authUser.name }}</li>
      <li>
        <RouterLink to="/dashboard">Dashboard</RouterLink>
      </li>
      <li>
        <button @click="authStore.logout">Logout</button>
      </li>
    </ul>
    <RouterLink v-if="showLogin" to="/login">Login</RouterLink>
  </header>
</template>
