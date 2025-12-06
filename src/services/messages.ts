import api from './api'

export interface Message {
  id: number
  body: string
  user: {
    id: number
    name: string
    email: string
  }
  createdAt: string
}

export const messageService = {
  async getMessages(page = 1) {
    return api.get(`/api/messages?page=${page}`)
  },

  async postMessage(data: { body: string }) {
    return api.post('/api/messages', data)
  },

  async paginateMessages(link: string) {
    return api.get(link)
  }
}
