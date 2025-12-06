<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

const form = ref({
  email: '',
  password: '',
  remember: false
})

const errors = ref<Record<string, string[]>>({})

async function handleSubmit() {
  errors.value = {}
  auth.clearError()

  try {
    await auth.login(form.value)
  } catch (e: any) {
    if (e.response?.data?.errors) {
      errors.value = e.response.data.errors
    }
  }
}
</script>

<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">Login</h1>

    <div v-if="auth.error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
      {{ auth.error }}
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email[0] }}</p>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password[0] }}</p>
      </div>

      <div class="flex items-center">
        <input
          id="remember"
          v-model="form.remember"
          type="checkbox"
          class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label for="remember" class="ml-2 text-sm text-gray-600">Remember me</label>
      </div>

      <button
        type="submit"
        :disabled="auth.isLoading"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 transition"
      >
        {{ auth.isLoading ? 'Logging in...' : 'Login' }}
      </button>

      <div class="text-center text-sm">
        <RouterLink to="/forgot-password" class="text-blue-600 hover:underline">
          Forgot your password?
        </RouterLink>
      </div>

      <div class="text-center text-sm text-gray-600">
        Don't have an account?
        <RouterLink to="/register" class="text-blue-600 hover:underline">Register</RouterLink>
      </div>
    </form>
  </div>
</template>
