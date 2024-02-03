import { createRouter, createWebHistory } from 'vue-router'
import PersonalInfo from '@/views/PersonalInfo.vue'
import SelectYourPlan from '@/views/SelectYourPlan.vue'
import PickAddons from '@/views/PickAddons.vue'
import FinishingUp from '@/views/FinishingUp.vue'
import ThankYou from '@/views/ThankYou.vue'

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
    },
    {
      path: '/select-your-plan',
      name: 'select-your-plan',
      component: SelectYourPlan
    },
    {
      path: '/pick-addons',
      name: 'pick-addons',
      component: PickAddons
    },
    {
      path: '/finishing-up',
      name: 'finishing-up',
      component: FinishingUp
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYou
    }
  ]
})

export default router
