import { defineStore } from 'pinia'
import { ref } from 'vue'
import { messageService, type Message } from '@/services/messages'

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

export const useMessagesStore = defineStore('messages', () => {
  const messages = ref<Message[]>([])
  const meta = ref<PaginationMeta | null>(null)
  const links = ref<PaginationLinks | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function getMessages(page = 1) {
    try {
      isLoading.value = true
      error.value = null
      const response = await messageService.getMessages(page)
      messages.value = response.data.data
      meta.value = response.data.meta
      links.value = response.data.links
    } catch (e: any) {
      error.value = e.response?.data?.message || 'Failed to fetch messages'
    } finally {
      isLoading.value = false
    }
  }

  async function postMessage(body: string) {
    try {
      isLoading.value = true
      error.value = null
      const response = await messageService.postMessage({ body })
      messages.value = response.data.data
      meta.value = response.data.meta
      links.value = response.data.links
    } catch (e: any) {
      error.value = e.response?.data?.message || 'Failed to post message'
      throw e
    } finally {
      isLoading.value = false
    }
  }

  async function paginateMessages(link: string) {
    try {
      isLoading.value = true
      error.value = null
      const response = await messageService.paginateMessages(link)
      messages.value = response.data.data
      meta.value = response.data.meta
      links.value = response.data.links
    } catch (e: any) {
      error.value = e.response?.data?.message || 'Failed to fetch messages'
    } finally {
      isLoading.value = false
    }
  }

  return {
    messages,
    meta,
    links,
    isLoading,
    error,
    getMessages,
    postMessage,
    paginateMessages
  }
})
