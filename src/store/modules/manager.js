import { login as loginApi } from '@/api/index'
export default {
  namespaced: true,
  state: {
    id: '',
    username: '',
    role: ''
  },
  mutations: {
    UPDATE_USER_INFO(state, payload) {
      state.username = payload.username
      state.role = payload.role
      state.id = payload.id
    }
  },
  actions: {
    login({ commit }, { username, password }) {
      return new Promise((resolve, reject) => {
        loginApi({ username, password })
          .then(res => {
            commit('UPDATE_USER_INFO', res.data)
            resolve(res)
          })
          .catch(err => reject(err))
      })
    }
    // getNewAct({ commit }, { username, password }) {
    //   return new Promise((resolve, reject) => {
    //     loginApi({ username, password })
    //       .then(res => {
    //         commit('UPDATE_USER_INFO', res.data)
    //         resolve(res)
    //       })
    //       .catch(err => reject(err))
    //   })
    // }
  }
}
