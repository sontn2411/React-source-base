import axios from 'axios'

// Initialize an Axios instance with basic configurations
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor before sending (e.g., attach token)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response interceptor from Server
apiClient.interceptors.response.use(
  (response) => {
    // Return data directly to make API calls cleaner
    return response.data
  },
  (error) => {
    // Handle common errors (e.g., 401 automatically logout)
    if (error.response?.status === 401) {
      console.error('Unauthorized! Please login again.')
      // Handle logout...
    }
    return Promise.reject(error)
  },
)

export default apiClient
