<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()
const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="bg-white shadow">
    <nav class="container mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex">
          <RouterLink to="/" class="flex items-center text-xl font-bold text-gray-800">
            Laravel Vue
          </RouterLink>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-4">
          <template v-if="auth.isAuthenticated">
            <RouterLink
              to="/dashboard"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Dashboard
            </RouterLink>
            <RouterLink
              v-if="auth.isAdmin"
              to="/users"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Users
            </RouterLink>
            <RouterLink
              to="/settings"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Settings
            </RouterLink>
            <button
              @click="auth.logout"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Logout
            </button>
          </template>
          <template v-else>
            <RouterLink
              to="/login"
              class="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Login
            </RouterLink>
            <RouterLink
              to="/register"
              class="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Register
            </RouterLink>
          </template>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden pb-4">
        <template v-if="auth.isAuthenticated">
          <RouterLink
            to="/dashboard"
            class="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            Dashboard
          </RouterLink>
          <RouterLink
            v-if="auth.isAdmin"
            to="/users"
            class="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            Users
          </RouterLink>
          <RouterLink
            to="/settings"
            class="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            Settings
          </RouterLink>
          <button
            @click="auth.logout"
            class="block w-full text-left text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
          >
            Logout
          </button>
        </template>
        <template v-else>
          <RouterLink
            to="/login"
            class="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            Login
          </RouterLink>
          <RouterLink
            to="/register"
            class="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            Register
          </RouterLink>
        </template>
      </div>
    </nav>
  </header>
</template>
