<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

const form = ref({
  name: '',
  email: ''
})

const errors = ref<Record<string, string[]>>({})
const success = ref(false)
const isLoading = ref(false)

onMounted(() => {
  if (auth.user) {
    form.value.name = auth.user.name
    form.value.email = auth.user.email
  }
})

async function handleSubmit() {
  errors.value = {}
  success.value = false
  isLoading.value = true

  try {
    await auth.updateProfile(form.value)
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
  <div>
    <h3 class="text-lg font-medium text-gray-900 mb-4">Profile Information</h3>

    <div v-if="success" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
      Profile updated successfully!
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name[0] }}</p>
      </div>

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

      <button
        type="submit"
        :disabled="isLoading"
        class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 transition"
      >
        {{ isLoading ? 'Saving...' : 'Save Changes' }}
      </button>
    </form>
  </div>
</template>
