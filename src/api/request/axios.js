import axios from 'axios'
import store from '@/store/index'
import { encodeQs } from '@/utils/query'

const ins = axios.create({
  baseURL: process.env.baseURL,
  timeout: 60 * 1000,
  validateStatus: function(status) {
    return status >= 200 && status < 300
  }
})

ins.interceptors.request.use(config => {
  const token = localStorage.getItem('act')
  if (token) {
    config.headers['Dg-Act'] = token
    config.headers['Dg-Identity'] = store.state.manager.id
  }
  // 若未指定自定义Content-Type，请求体参数encode处理
  if (!config.headers['Content-Type'] && typeof config.data === 'object') {
    config.data = encodeQs(config.data)
  }
  return config
}, err => Promise.reject(err))

ins.interceptors.response.use(response => {
  // debugger
  const actHeader = 'set-act'
  const rftHeader = 'set-act'
  if (response.headers[actHeader]) {
    localStorage.setItem('act', response.headers[actHeader])
  }
  if (response.headers[rftHeader]) {
    localStorage.setItem('rft', response.headers[rftHeader])
  }

  const data = response.data
  if (!data.success) {
    return Promise.reject(data)
  } else if (data.code === 'F310') {
    // // act过期，重新获取一个新的token
    // return new Promise((resolve, reject) => {
    //   store
    //     .dispatch('manager/getNewAct')
    //     .then(() => ins(response.config))
    //     .then(res => {
    //       debugger
    //       resolve({})
    //     })
    //     .catch(reSentErr => {
    //       debugger
    //       reject(reSentErr)
    //     })
    // })
  }
  return response.data
}, error => {
  if (error.response) {
    // 由服务端状态码产生的错误
    return Promise.reject(error.response.data)
  } else if (error.request) {
    // 没有拿到响应的请求错误
    const message = error.message
    if (message === 'Network Error') {
      return Promise.reject(new Error('网络连接失败'))
    } else if (message === 'ECONNABORTED') {
      return Promise.reject(new Error('网络请求超时'))
    }
  }
  return Promise.reject(error)
})

const methods = ['get', 'post', 'put', 'delete']
methods.forEach(method => {
  ins[method] = function(options) {
    if (typeof options === 'string') {
      options = {
        url: options
      }
    } else {
      options = {
        ...options,
        method
      }
    }
    return ins(options)
  }
})

export default ins
