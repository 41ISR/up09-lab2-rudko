import { createRouter, createWebHistory } from 'vue-router'

import { useClientStore } from "@/store/user"

import ChatView from '@/views/ChatView.vue'
import LoginView from '@/views/LoginView.vue'
import ContactView from '@/views/ContactView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView,
    },
    {
      path: '/chat/:id',
      name: 'Chat',
      component: ChatView,
      meta: { requiresAuth: true },
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: ContactView,
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach((to) => {
  const user = useClientStore()

  if (to.meta.requiresAuth && !user.userId)
    return '/'
})

export default router
