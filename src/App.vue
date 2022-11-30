<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-28 15:12:42
 * @LastEditTime: 2022-11-30 15:00:21
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
      <div p-t-12 m-x-4 overflow-hidden>
        <Tab />
      </div>
      <main min-h="60%" m-4>
        <p c="[var(--van-text-color)]">
          Template for Vue3 Vant Mobile
        </p>
        <router-view />
      </main>

      <Footer />
    </n-config-provider>
  </van-config-provider>
</template>

