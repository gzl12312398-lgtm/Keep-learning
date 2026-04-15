<template>
  <div
    style="
      width: 400px;
      margin: 100px auto;
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 8px;
    "
  >
    <h2>用户登录</h2>
    <a-form :model="formState" @finish="handleLogin" layout="vertical">
      <!-- 用户名校验 -->
      <a-form-item
        label="用户名"
        name="username"
        :rules="[{ required: true, message: '请输入用户名' }]"
      >
        <a-input v-model:value="formState.username" placeholder="请输入用户名" />
      </a-form-item>

      <!-- 密码校验 -->
      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, min: 6, message: '密码必须大于6位' }]"
      >
        <a-input-password v-model:value="formState.password" placeholder="请输入密码" />
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit" block:loading="loading">登录</a-button>
      </a-form-item>

      <div style="text-align: center">
        还没有账号？ <router-link to="/register">立即注册</router-link>
      </div>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import request from '@/api/request'

const router = useRouter()
const loading = ref(false) // 控制按钮加载状态
const formState = reactive({
  username: '',
  password: '',
})

const handleLogin = async (values) => {
  loading.value = true
  try {
    const res = await request.post('/login', values)
    if (res.status === 204 || res.status === 200 || res.success) {
      message.success('欢迎回来！')
      // --- 关键代码：把用户名存到浏览器本地存储 ---
      console.log('准备跳转到欢迎页，用户名：', values.username) // 调试输出
      localStorage.setItem('username', values.username)
      router.push('/welcome')
    }
  } catch (error) {
    // 拦截器已经报过错了，这里不用写
  } finally {
    loading.value = false
  }
}
</script>
