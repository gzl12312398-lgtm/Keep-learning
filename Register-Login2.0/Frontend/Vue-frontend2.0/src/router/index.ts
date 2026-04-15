import { message } from 'ant-design-vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: () => import('@/views/Login.vue') },
    { path: '/register', component: () => import('@/views/Register.vue') },
    { path: '/welcome', component: () => import('@/views/Welcome.vue') },
  ],
})

// 路由守卫：每次跳转前都会执行这个函数
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('username') // 检查是否有登录记录

  // 如果要去欢迎页，但没有登录，强制跳到登录页
  if (to.path === '/welcome' && !isAuthenticated) {
    message.warning('请先登录')
    next('/login')
  } else {
    next() // 否则放行
  }
})
export default router
