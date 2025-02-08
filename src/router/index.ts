import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ChatView from '../views/ChatView.vue'
import WelcomePage from '../views/WelcomePage.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomePage,
    },
    {
      path: '/chat/',
      name: 'chat',
      component: ChatView,
    },
    // {
    //   path: '/chat/:id',
    //   name: 'chat',
    //   component: ChatView,
    // },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: ContactView,
    },
  ],
})

export default router
