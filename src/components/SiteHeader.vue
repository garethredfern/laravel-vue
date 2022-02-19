<script setup>
import { computed } from "vue";
import { useAuth } from "@/stores/authStore";
import { HomeIcon } from "@heroicons/vue/solid";

const authStore = useAuth();
const showLogin = computed(() => !authStore.loggedIn && !authStore.loading);
</script>

<template>
  <header class="flex space-x-4 bg-slate-100 p-5 border-b-2 uppercase text-sm">
    <nav class="space-x-5">
      <RouterLink to="/" class="transition hover:text-gray-600">
        <HomeIcon class="h-5 w-5" />
      </RouterLink>
    </nav>
    <ul v-if="authStore.loggedIn" class="flex space-x-4">
      <li>
        <RouterLink
          :to="{ name: 'user', params: { id: authStore.user.id } }"
          class="transition hover:text-gray-600"
        >
          {{ authStore.user.name }}
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/dashboard" class="transition hover:text-gray-600"
          >Dashboard</RouterLink
        >
      </li>
      <li v-if="authStore.user.isAdmin">
        <RouterLink to="/users" class="transition hover:text-gray-600"
          >Users</RouterLink
        >
      </li>
      <li>
        <button
          @click="authStore.logout"
          class="transition hover:text-gray-600 uppercase text-sm"
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
