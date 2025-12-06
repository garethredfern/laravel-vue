import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { authService, type User, type LoginCredentials, type RegisterData } from '@/services/auth'
import router from '@/router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!user.value)
  const isAdmin = computed(() => user.value?.is_admin ?? false)
  const isVerified = computed(() => !!user.value?.email_verified_at)

  async function fetchUser() {
    if (isLoading.value) return

    try {
      isLoading.value = true
      error.value = null
      const response = await authService.getUser()
      user.value = response.data
    } catch (e) {
      user.value = null
    } finally {
      isLoading.value = false
    }
  }

  async function login(credentials: LoginCredentials) {
    try {
      isLoading.value = true
      error.value = null
      await authService.login(credentials)
      await fetchUser()

      const redirect = router.currentRoute.value.query.redirect as string
      router.push(redirect || '/dashboard')
    } catch (e: any) {
      error.value = e.response?.data?.message || 'Login failed'
      throw e
    } finally {
      isLoading.value = false
    }
  }

  async function register(data: RegisterData) {
    try {
      isLoading.value = true
      error.value = null
      await authService.register(data)
      await fetchUser()
      router.push('/dashboard')
    } catch (e: any) {
      error.value = e.response?.data?.message || 'Registration failed'
      throw e
    } finally {
      isLoading.value = false
    }
  }

  async function logout() {
    try {
      await authService.logout()
    } finally {
      user.value = null
      router.push('/login')
    }
  }

  async function forgotPassword(email: string) {
    await authService.forgotPassword(email)
  }

  async function resetPassword(data: {
    token: string
    email: string
    password: string
    password_confirmation: string
  }) {
    await authService.resetPassword(data)
    router.push('/login')
  }

  async function updateProfile(data: { name: string; email: string }) {
    const response = await authService.updateProfile(data)
    await fetchUser()
    return response
  }

  async function updatePassword(data: {
    current_password: string
    password: string
    password_confirmation: string
  }) {
    return authService.updatePassword(data)
  }

  async function sendVerificationEmail() {
    return authService.sendVerificationEmail()
  }

  function clearError() {
    error.value = null
  }

  return {
    user,
    isLoading,
    error,
    isAuthenticated,
    isAdmin,
    isVerified,
    fetchUser,
    login,
    register,
    logout,
    forgotPassword,
    resetPassword,
    updateProfile,
    updatePassword,
    sendVerificationEmail,
    clearError
  }
})
