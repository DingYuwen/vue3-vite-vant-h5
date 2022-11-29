<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-28 15:12:42
 * @LastEditTime: 2022-11-29 18:57:34
 * @LastEditors: dingyuwen
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

