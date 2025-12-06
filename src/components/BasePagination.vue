<script setup lang="ts">
interface PaginationMeta {
  current_page: number
  last_page: number
  per_page: number
  total: number
}

interface PaginationLinks {
  first: string | null
  last: string | null
  prev: string | null
  next: string | null
}

const props = defineProps<{
  meta?: PaginationMeta | null
  links: PaginationLinks
}>()

const emit = defineEmits<{
  paginate: [link: string]
}>()

function goToPage(link: string | null) {
  if (link) {
    emit('paginate', link)
  }
}
</script>

<template>
  <div aria-label="Pagination" class="flex items-center justify-between py-4 border-t border-gray-200">
    <p v-if="meta" class="text-sm text-gray-500">
      Page {{ meta.current_page }} of {{ meta.last_page }}
    </p>
    <div class="flex space-x-2">
      <button
        v-if="links.prev"
        @click="goToPage(links.first)"
        class="px-3 py-1.5 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition"
      >
        First
      </button>

      <button
        v-if="links.prev"
        @click="goToPage(links.prev)"
        class="px-3 py-1.5 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition"
      >
        Previous
      </button>

      <button
        v-if="links.next"
        @click="goToPage(links.next)"
        class="px-3 py-1.5 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition"
      >
        Next
      </button>

      <button
        v-if="links.next"
        @click="goToPage(links.last)"
        class="px-3 py-1.5 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50 transition"
      >
        Last
      </button>
    </div>
  </div>
</template>
