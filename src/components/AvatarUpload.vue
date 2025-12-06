<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { authService } from '@/services/auth'

const auth = useAuthStore()

const fileInput = ref<HTMLInputElement | null>(null)
const preview = ref<string | null>(null)
const isLoading = ref(false)
const error = ref<string | null>(null)
const success = ref(false)

function handleFileSelect(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    // Preview
    const reader = new FileReader()
    reader.onload = (e) => {
      preview.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

async function handleUpload() {
  const file = fileInput.value?.files?.[0]
  if (!file) return

  isLoading.value = true
  error.value = null
  success.value = false

  try {
    await authService.uploadAvatar(file)
    await auth.fetchUser()
    success.value = true
    preview.value = null
    if (fileInput.value) {
      fileInput.value.value = ''
    }
  } catch (e: any) {
    error.value = e.response?.data?.message || 'Failed to upload avatar'
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <h3 class="text-lg font-medium text-gray-900 mb-4">Profile Avatar</h3>

    <div v-if="success" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
      Avatar updated successfully!
    </div>

    <div v-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
      {{ error }}
    </div>

    <div class="flex items-start space-x-6">
      <!-- Current Avatar -->
      <div class="flex-shrink-0">
        <img
          v-if="preview || auth.user?.avatar"
          :src="preview || auth.user?.avatar || ''"
          alt="Avatar"
          class="h-24 w-24 rounded-full object-cover"
        />
        <div
          v-else
          class="h-24 w-24 rounded-full bg-gray-300 flex items-center justify-center"
        >
          <span class="text-gray-600 text-2xl font-medium">
            {{ auth.user?.name.charAt(0) }}
          </span>
        </div>
      </div>

      <!-- Upload Form -->
      <div class="flex-1">
        <input
          ref="fileInput"
          type="file"
          accept="image/*"
          @change="handleFileSelect"
          class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <p class="mt-2 text-sm text-gray-500">PNG, JPG, GIF up to 2MB</p>

        <button
          v-if="preview"
          @click="handleUpload"
          :disabled="isLoading"
          class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 transition"
        >
          {{ isLoading ? 'Uploading...' : 'Upload Avatar' }}
        </button>
      </div>
    </div>
  </div>
</template>
