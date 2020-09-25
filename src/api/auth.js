import axios from './request/axios'

const prefix = '/admin/manager'

export function testPms(params) {
  return axios.get({
    url: '/test/permission',
    params
  })
}

// 管理员是否存在
export function postManagerExist(params) {
  return axios.post({
    url: `${prefix}/exist`,
    data: params
  })
}

// 注册
export function register(params) {
  return axios.post({
    url: prefix,
    data: params
  })
}

// 登录
export function login(params) {
  return axios.post({
    url: `${prefix}/login`,
    data: params
  })
}
