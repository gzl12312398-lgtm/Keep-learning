<template>
  <div style="text-align: center; margin-top: 100px">
    <a-result
      status="success"
      title="登录成功！"
      :sub-title="'欢迎回来，尊贵的管理员：' + currentUser"
    >
      <template #extra>
        <a-button type="primary" @click="handleLogout">退出登录</a-button>
      </template>
    </a-result>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { message } from 'ant-design-vue'

const router = useRouter()
const currentUser = ref('')

onMounted(() => {
  // 页面加载时从 localStorage 获取用户名
  const user = localStorage.getItem('username')
  if (!user) {
    // 如果没登录，直接踢回登录页
    message.warning('请先登录')
    router.push('/login')
  } else {
    currentUser.value = user
  }
})

const handleLogout = () => {
  localStorage.removeItem('username') // 清除数据
  message.info('已退出登录')
  router.push('/login')
}
</script>
