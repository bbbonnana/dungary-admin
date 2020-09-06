import Vue from 'vue'
import App from './App.vue'
import '../public/favicon.png'
// import router from './router'
// import store from './store'
// import '@/global/element-ui'
// import '@/assets/scss/index.scss'

Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')
