import axios from 'axios'
import { message } from 'ant-design-vue'

const service = axios.create({
  baseURL: 'http://localhost:3000/api', // 后端地址
  timeout: 5000,
})

// 响应拦截器：帮你统一处理错误提示
service.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const msg = error.response?.data?.message || '网络错误'
    message.error(msg)
    return Promise.reject(error)
  },
)

export default service
