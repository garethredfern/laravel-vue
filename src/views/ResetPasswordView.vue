<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()
const auth = useAuthStore()

const form = ref({
  token: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const errors = ref<Record<string, string[]>>({})
const isLoading = ref(false)

onMounted(() => {
  form.value.token = route.query.token as string || ''
  form.value.email = route.query.email as string || ''
})

async function handleSubmit() {
  errors.value = {}
  isLoading.value = true

  try {
    await auth.resetPassword(form.value)
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
    <h1 class="text-2xl font-bold text-gray-800 mb-6">Reset Password</h1>

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
        <label for="password" class="block text-sm font-medium text-gray-700">New Password</label>
        <input
          id="password"
          v-model="form.password"
          type="password"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <p v-if="errors.password" class="text-red-500 text-sm mt-1">{{ errors.password[0] }}</p>
      </div>

      <div>
        <label for="password_confirmation" class="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          id="password_confirmation"
          v-model="form.password_confirmation"
          type="password"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        :disabled="isLoading"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50 transition"
      >
        {{ isLoading ? 'Resetting...' : 'Reset Password' }}
      </button>
    </form>
  </div>
</template>
