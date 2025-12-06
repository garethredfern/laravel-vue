import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Session expired or unauthorized
    if (error.response?.status === 401 || error.response?.status === 419) {
      // Import dynamically to avoid circular dependency
      import('@/stores/auth').then(({ useAuthStore }) => {
        const auth = useAuthStore()
        auth.user = null
      })
      import('@/router').then(({ default: router }) => {
        router.push('/login')
      })
    }
    return Promise.reject(error)
  }
)

export default api
