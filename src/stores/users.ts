import { defineStore } from 'pinia'
import { ref } from 'vue'
import { userService, type User } from '@/services/users'

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

export const useUsersStore = defineStore('users', () => {
  const users = ref<User[]>([])
  const meta = ref<PaginationMeta | null>(null)
  const links = ref<PaginationLinks | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function getUsers(page = 1) {
    try {
      isLoading.value = true
      error.value = null
      const response = await userService.getUsers(page)
      users.value = response.data.data
      meta.value = response.data.meta
      links.value = response.data.links
    } catch (e: any) {
      error.value = e.response?.data?.message || 'Failed to fetch users'
    } finally {
      isLoading.value = false
    }
  }

  async function paginateUsers(link: string) {
    try {
      isLoading.value = true
      error.value = null
      const response = await userService.paginateUsers(link)
      users.value = response.data.data
      meta.value = response.data.meta
      links.value = response.data.links
    } catch (e: any) {
      error.value = e.response?.data?.message || 'Failed to fetch users'
    } finally {
      isLoading.value = false
    }
  }

  return {
    users,
    meta,
    links,
    isLoading,
    error,
    getUsers,
    paginateUsers
  }
})
