import axios from 'axios'
import { router } from '@/router/index'

import { useUserStore } from '@/store/user'

const userApi = axios.create({
  baseURL: 'http://82.147.71.186:3000',
})

export async function login(id: string) {
  return userApi.post('/login', { id: id })
}

export function logout() {
  const userStore = useUserStore()
  userStore.removeUser()
  router.push({ name: 'Login' })
}
