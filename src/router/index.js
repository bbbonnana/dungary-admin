import Vue from 'vue'
import VueRouter from 'vue-router'
import mainRoutes from './main/index'
import authRoutes from './auth/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/components/layout/MainLayout.vue'),
    children: [
      ...mainRoutes
    ]
  },
  {
    name: 'authLayout',
    path: '/auth',
    component: () => import('@/components/layout/AuthLayout.vue'),
    children: [
      ...authRoutes
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
