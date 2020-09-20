import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const homeRoute = {
  path: 'home',
  component: () => import('@/views/home/Home.vue'),
  meta: {
    menu: 'home'
  }
}

// // 用户管理页
// const userRoute = {
//   path: 'user',
//   component: () => import('@/views/user/User.vue'),
//   meta: {
//     menu: 'user'
//   }
// }

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/MainLayout.vue'),
    children: [
      homeRoute,
      // userRoute,
      { path: '*', redirect: 'home' }
    ]
  }
  // {
  //   path: '*',
  //   redirect: '/'
  // }
]

const router = new VueRouter({
  routes
})

export default router
