<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

const email = ref('')
const errors = ref<Record<string, string[]>>({})
const success = ref(false)
const isLoading = ref(false)

async function handleSubmit() {
  errors.value = {}
  success.value = false
  isLoading.value = true

  try {
    await auth.forgotPassword(email.value)
    success.value = true
  } catch (e: any) {
    if (e.response?.data?.errors) {
      errors.value = e.response.data.errors
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="max-w-md mx-auto">
    <h1 class="text-2xl font-bold text-gray-800 mb-6">Forgot Password</h1>

    <p class="text-gray-600 mb-6">
      Enter your email address and we'll send you a link to reset your password.
    </p>

    <div v-if="success" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
      We've emailed you a password reset link!
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email[0] }}</p>
      </div>

      <button
        type="submit"
        :disabled="isLoading"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 transition"
      >
        {{ isLoading ? 'Sending...' : 'Send Reset Link' }}
      </button>

      <div class="text-center text-sm text-gray-600">
        Remember your password?
        <RouterLink to="/login" class="text-blue-600 hover:underline">Login</RouterLink>
      </div>
    </form>
  </div>
</template>
