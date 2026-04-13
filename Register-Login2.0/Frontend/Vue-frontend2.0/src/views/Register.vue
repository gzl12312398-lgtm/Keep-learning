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

      <a-form-item>
        <a-button type="primary" html-type="submit" block>完成注册</a-button>
      </a-form-item>

      <div style="text-align: center">
        已有账号？ <router-link to="/login">返回登录</router-link>
      </div>
    </a-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'

const router = useRouter()
const formState = reactive({ username: '', password: '' })

const handleRegister = (values) => {
  message.success('注册成功，请登录')
  router.push('/login')
}
</script>
