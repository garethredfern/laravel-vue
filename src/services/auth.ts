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

export interface LoginCredentials {
  email: string
  password: string
  remember?: boolean
}

export interface RegisterData {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export const authService = {
  async getCsrfCookie() {
    await api.get('/sanctum/csrf-cookie')
  },

  async login(credentials: LoginCredentials) {
    await this.getCsrfCookie()
    return api.post('/login', credentials)
  },

  async register(data: RegisterData) {
    await this.getCsrfCookie()
    return api.post('/register', data)
  },

  async logout() {
    return api.post('/logout')
  },

  async getUser() {
    return api.get<User>('/api/users/auth')
  },

  async forgotPassword(email: string) {
    await this.getCsrfCookie()
    return api.post('/forgot-password', { email })
  },

  async resetPassword(data: {
    token: string
    email: string
    password: string
    password_confirmation: string
  }) {
    await this.getCsrfCookie()
    return api.post('/reset-password', data)
  },

  async updateProfile(data: { name: string; email: string }) {
    return api.put('/user/profile-information', data)
  },

  async updatePassword(data: {
    current_password: string
    password: string
    password_confirmation: string
  }) {
    return api.put('/user/password', data)
  },

  async sendVerificationEmail() {
    return api.post('/email/verification-notification')
  },

  async uploadAvatar(file: File) {
    const formData = new FormData()
    formData.append('avatar', file)
    return api.post('/api/users/auth/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
