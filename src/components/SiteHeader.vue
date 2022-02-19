<script setup>
import { computed } from "vue";
import { useAuth } from "@/stores/authStore";
import { HomeIcon } from "@heroicons/vue/solid";

const authStore = useAuth();
const showLogin = computed(() => !authStore.loggedIn && !authStore.loading);
</script>

<template>
  <header
    class="flex justify-between bg-slate-100 p-5 border-b-2 uppercase text-sm"
  >
    <nav class="flex space-x-5">
      <RouterLink to="/" class="transition hover:text-gray-600">
        <HomeIcon class="h-5 w-5" />
      </RouterLink>
      <ul v-if="authStore.loggedIn" class="flex space-x-5">
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
      </ul>
    </nav>
    <ul class="flex space-x-5">
      <li v-if="authStore.loggedIn">
        <RouterLink
          :to="{ name: 'user', params: { id: authStore.user.id } }"
          class="transition hover:text-gray-600"
        >
          {{ authStore.user.name }}
        </RouterLink>
      </li>
      <li>
        <RouterLink
          v-if="showLogin"
          to="/login"
          class="transition hover:text-gray-600"
          >Login</RouterLink
        >
        <button
          v-else
          @click="authStore.logout"
          class="transition hover:text-gray-600 uppercase text-sm"
        >
          Logout
        </button>
      </li>
    </ul>
  </header>
</template>
