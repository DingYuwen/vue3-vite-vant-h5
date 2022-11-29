<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-28 15:12:42
 * @LastEditTime: 2022-11-29 23:25:45
 * @LastEditors: dingyuwen ding_yuwen@163.com
 * @Description:
-->
<script setup lang="ts">
import { Footer, Header } from './layout'
import { isDark } from '@/composables'
</script>

<template>
  <van-config-provider h-full :theme="isDark ? 'dark' : 'light'">
    <Header />
    <router-view min-h="60%" />
    <Footer />
  </van-config-provider>
</template>

