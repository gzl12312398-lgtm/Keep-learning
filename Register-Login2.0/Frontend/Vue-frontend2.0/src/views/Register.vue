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
    <h2>新用户注册</h2>
    <a-form :model="formState" @finish="handleRegister" layout="vertical">
      <a-form-item
        label="用户名"
        name="username"
        :rules="[{ required: true, message: '请输入用户名' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="password"
        :rules="[{ required: true, min: 6, message: '密码至少6位' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <!-- 补全：确认密码输入框 -->
      <a-form-item
        label="确认密码"
        name="confirmPassword"
        :rules="[{ required: true, validator: validatePass2, trigger: 'change' }]"
      >
        <a-input-password v-model:value="formState.confirmPassword" />
      </a-form-item>

      <a-form-item>
        <a-button type="primary" html-type="submit" block :loading="loading">完成注册</a-button>
      </a-form-item>

      <div style="text-align: center">
        已有账号？ <router-link to="/login">返回登录</router-link>
      </div>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'
import request from '@/API/request' // 引入我们封装好的 axios

const router = useRouter()
const loading = ref(false) // 控制按钮加载状态
const formState = reactive({ username: '', password: '', confirmPassword: '' })

const handleRegister = async (values) => {
  loading.value = true
  try {
    const res = await request.post('/register', values)

    if (res.success) {
      message.success('注册成功！请登录')
      router.push('/login') // 注册成功后跳转到登录页
    }
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

// 在 a-form-item 的 rules 里加入 { validator: validatePass2, trigger: 'change' }
const validatePass2 = async (_rule, value) => {
  if (value === '') {
    return Promise.reject('请再次输入密码')
  } else if (value !== formState.password) {
    return Promise.reject('两次输入密码不一致!')
  } else {
    return Promise.resolve()
  }
}
</script>
