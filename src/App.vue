<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-28 15:12:42
 * @LastEditTime: 2022-12-01 23:45:22
 * @LastEditors: dingyuwen
 * @Description:
-->
<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { Footer, Header } from './layout'
import { isDark } from '@/composables'

const showPopup = ref(false)
const barRef = ref<HTMLElement>()
watch(showPopup, (v) => {
  console.log(v)
})
// const offset = computed(() => {
//   if (barRef.value) {
//     const rect = useElementBounding(barRef)
//     return rect.bottom.value
//   }
//   return 0
// })
</script>

<template>
  <van-config-provider h-full :theme="isDark ? 'dark' : 'light'">
    <n-config-provider :theme="isDark ? darkTheme : null">
      <Header />
      <div p-t-12 m-x-4 lg:p-t-15>
        <Tab h-24px lg:h-30px />
      </div>
      <main min-h="60%" m-4>
        <p c="[var(--van-text-color)]">
          Template for Vue3 Vant Mobile
        </p>
        <van-cell ref="barRef" title="顶部弹出" is-link @click="showPopup = true" />
        <Popup
          v-model:visible="showPopup"
          position="top"
          :style="{ height: '30%', top: `153px` }"
        />
        <router-view />
      </main>

      <Footer />
    </n-config-provider>
  </van-config-provider>
</template>

