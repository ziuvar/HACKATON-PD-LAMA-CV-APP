import axios from 'axios'
import { msalInstance } from '@/auth/msal'

const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL || '/api' })

api.interceptors.request.use(async (config) => {
  try {
    const accounts = msalInstance.getAllAccounts()
    if (accounts.length > 0) {
      const result = await msalInstance.acquireTokenSilent({
        account: accounts[0],
        scopes: ['openid', 'offline_access']
      })
      config.headers = config.headers || {}
      config.headers.Authorization = `Bearer ${result.accessToken}`
    }
  } catch {}
  return config
})

export default api