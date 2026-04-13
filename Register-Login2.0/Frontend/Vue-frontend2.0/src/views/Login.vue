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
        <a-button type="primary" html-type="submit" block>登录</a-button>
      </a-form-item>

      <div style="text-align: center">
        还没有账号？ <router-link to="/register">立即注册</router-link>
      </div>
    </a-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import axios from 'axios'

const router = useRouter()
const formState = reactive({
  username: '',
  password: '',
})

const handleLogin = async (values) => {
  console.log('提交的数据:', values)
  // 这里模拟一下后端接口逻辑
  try {
    // 等你写好后端了，就把这里换成真实的：await axios.post('/api/login', values)
    message.success('登录成功！')
    router.push('/welcome') // 跳转到欢迎页
  } catch (error) {
    message.error('登录失败')
  }
}
</script>
