<script setup lang="ts">
import type { Message } from '@/services/messages'
import BasePagination from '@/components/BasePagination.vue'

interface PaginationLinks {
  first: string | null
  last: string | null
  prev: string | null
  next: string | null
}

defineProps<{
  messages: Message[]
  links: PaginationLinks | null
  loading: boolean
}>()

const emit = defineEmits<{
  paginate: [link: string]
}>()
</script>

<template>
  <div>
    <div v-if="loading" class="text-center py-4">
      <p class="text-gray-500">Loading messages...</p>
    </div>

    <div v-else-if="messages.length === 0" class="text-center py-4">
      <p class="text-gray-500">No messages yet. Be the first to post!</p>
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="message in messages"
        :key="message.id"
        class="bg-gray-50 rounded-lg p-4"
      >
        <div class="flex items-start space-x-3">
          <div class="flex-shrink-0">
            <div class="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center">
              <span class="text-white font-medium">{{ message.user.name.charAt(0) }}</span>
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900">{{ message.user.name }}</p>
            <p class="text-gray-700 mt-1">{{ message.body }}</p>
            <p class="text-xs text-gray-500 mt-2">{{ message.createdAt }}</p>
          </div>
        </div>
      </div>

      <BasePagination
        v-if="links"
        :links="links"
        @paginate="(link: string) => emit('paginate', link)"
      />
    </div>
  </div>
</template>
