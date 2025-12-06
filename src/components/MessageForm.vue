<script setup lang="ts">
import { ref } from 'vue'
import { useMessagesStore } from '@/stores/messages'

const emit = defineEmits<{
  messagePosted: []
}>()

const messagesStore = useMessagesStore()
const body = ref('')
const errors = ref<Record<string, string[]>>({})

async function handleSubmit() {
  errors.value = {}

  try {
    await messagesStore.postMessage(body.value)
    body.value = ''
    emit('messagePosted')
  } catch (e: any) {
    if (e.response?.data?.errors) {
      errors.value = e.response.data.errors
    }
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="mb-6">
    <div>
      <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
        New Message
      </label>
      <textarea
        id="message"
        v-model="body"
        rows="3"
        maxlength="250"
        required
        placeholder="What's on your mind?"
        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      ></textarea>
      <p class="text-sm text-gray-500 mt-1">{{ body.length }}/250</p>
      <p v-if="errors.body" class="text-red-500 text-sm mt-1">{{ errors.body[0] }}</p>
    </div>
    <button
      type="submit"
      :disabled="messagesStore.isLoading || !body.trim()"
      class="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 transition"
    >
      {{ messagesStore.isLoading ? 'Posting...' : 'Post Message' }}
    </button>
  </form>
</template>
