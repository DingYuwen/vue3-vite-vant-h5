<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-28 15:12:42
 * @LastEditTime: 2022-11-30 11:29:59
 * @LastEditors: dingyuwen
 * @Description:
-->
<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { Footer, Header } from './layout'
import { isDark } from '@/composables'
</script>

<template>
  <van-config-provider h-full :theme="isDark ? 'dark' : 'light'">
    <n-config-provider :theme="isDark ? darkTheme : null">
      <Header />
      <router-view min-h="60%" />
      <Footer />
    </n-config-provider>
  </van-config-provider>
</template>

