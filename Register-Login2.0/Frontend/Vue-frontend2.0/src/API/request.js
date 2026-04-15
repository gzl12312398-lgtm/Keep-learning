import axios from 'axios'
import { message } from 'ant-design-vue'

const service = axios.create({
  baseURL: 'http://localhost:3000/api', // 后端地址
  timeout: 5000,
})

// 请求拦截：演示“带上身份证”
service.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// 响应拦截器：帮你统一处理错误提示
service.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response.status === 401 || error.response.status === 403) {
    }
    return Promise.reject(error)
  },
)
export default service
