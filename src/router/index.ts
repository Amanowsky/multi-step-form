import { createRouter, createWebHistory } from 'vue-router'
import PersonalInfo from '@/views/PersonalInfo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/personal-info'
    },
    {
      path: '/personal-info',
      name: 'personal-info',
      component: PersonalInfo
    }
  ]
})

export default router
