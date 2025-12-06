import api from './api'

export interface User {
  id: number
  name: string
  email: string
  email_verified_at: string | null
  avatar: string | null
  is_admin: boolean
  created_at: string
}

export const userService = {
  async getUser(userId: number) {
    return api.get<User>(`/api/users/${userId}`)
  },

  async getUsers(page = 1) {
    return api.get(`/api/users?page=${page}`)
  },

  async paginateUsers(link: string) {
    return api.get(link)
  }
}
