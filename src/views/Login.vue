<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-12-28 21:08:15
 * @LastEditTime: 2022-12-28 22:16:11
 * @LastEditors: dingyuwen
 * @Description:
-->

<script setup lang="ts">
// import { login } from '@/api'
import { setToken } from '@/utils'
const router = useRouter()
const { query } = useRoute()
const loading = ref(false)
const loginInfo = ref({
  name: 'dingyuwen',
  password: '1',
})
async function handleLogin() {
  const { name, password } = loginInfo.value
  if (!name || !password)
    return

  try {
    loading.value = true
    // const res = await login({ name, password: password.toString() })
    // setToken(res.data.token)
    setToken('dingyuwen')
    if (query.redirect) {
      const path = query.redirect as string
      Reflect.deleteProperty(query, 'redirect')
      router.replace({ path, query })
    } else {
      router.replace('/')
    }
  } catch (error) {
    console.error(error)
  }
  loading.value = false
}
</script>

<template>
  <div wh-full flex-1 f-c-c>
    <van-button @click="handleLogin">
      login
    </van-button>
  </div>
</template>
