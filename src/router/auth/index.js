export default [
  {
    name: 'login',
    path: 'login',
    component: () => import('@/views/auth/Login.vue')
  },
  {
    name: 'register',
    path: 'register',
    component: () => import('@/views/auth/Register.vue')
  }
]
