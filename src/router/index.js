import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.view.vue'),
      children: [
        {
          path: "/",
          component: () => import('../components/Main.vue')
        }, 
        {
          path: ':channelName',
          component: () => import('../views/Stream.view.vue'),
          props: true,
        }
      ]
    },
    
  ]
})

export default router
