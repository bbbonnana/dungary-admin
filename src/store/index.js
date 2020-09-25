import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const context = require.context('./modules', true, /\.js$/i)
const modules = context.keys().reduce((modules, modulePath) => {
  const moduleName = /([^\\/]+)\.js/.exec(modulePath)[1]
  modules[moduleName] = context(modulePath).default
  return modules
}, {})

export default new Vuex.Store({
  modules
})
