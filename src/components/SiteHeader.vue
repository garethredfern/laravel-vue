<script setup>
import { computed } from "vue";
import { useAuth } from "@/stores/authStore";
import { HomeIcon } from "@heroicons/vue/solid";

const authStore = useAuth();
const showLogin = computed(() => !authStore.loggedIn && !authStore.authLoading);
</script>

<template>
  <header class="flex space-x-4 bg-slate-100 p-5 border-b-2 uppercase text-sm">
    <nav class="space-x-5">
      <RouterLink to="/" class="transition hover:text-gray-600">
        <HomeIcon class="h-5 w-5" />
      </RouterLink>
    </nav>
    <ul v-if="authStore.loggedIn" class="flex space-x-4">
      <li>{{ authStore.authUser.name }}</li>
      <li>
        <RouterLink to="/dashboard" class="transition hover:text-gray-600"
          >Dashboard</RouterLink
        >
      </li>
      <li>
        <button
          @click="authStore.logout"
          class="transition hover:text-gray-600"
        >
          Logout
        </button>
      </li>
    </ul>
    <RouterLink
      v-if="showLogin"
      to="/login"
      class="transition hover:text-gray-600"
      >Login</RouterLink
    >
  </header>
</template>
