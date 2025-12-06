<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

const form = ref({
  current_password: '',
  password: '',
  password_confirmation: ''
})

const errors = ref<Record<string, string[]>>({})
const success = ref(false)
const isLoading = ref(false)

async function handleSubmit() {
  errors.value = {}
  success.value = false
  isLoading.value = true

  try {
    await auth.updatePassword(form.value)
    success.value = true
    form.value = {
      current_password: '',
      password: '',
      password_confirmation: ''
    }
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
  <div>
    <h3 class="text-lg font-medium text-gray-900 mb-4">Update Password</h3>

    <div v-if="success" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
      Password updated successfully!
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="current_password" class="block text-sm font-medium text-gray-700">
          Current Password
        </label>
        <input
          id="current_password"
          v-model="form.current_password"
          type="password"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <p v-if="errors.current_password" class="text-red-500 text-sm mt-1">
          {{ errors.current_password[0] }}
        </p>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700">
          New Password
        </label>
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
          Confirm New Password
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
        class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 transition"
      >
        {{ isLoading ? 'Updating...' : 'Update Password' }}
      </button>
    </form>
  </div>
</template>
