<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-28 15:12:42
 * @LastEditTime: 2022-12-06 16:20:47
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
      <div m-4>
        <Tab h-24px lg:h-30px />
      </div>
      <main min-h="60%" m-4>
        <!-- <h6 m-2 c="[var(--van-text-color)]">
          Template for Vue3 Vant Mobile
        </h6> -->
        <router-view />
      </main>
      <Footer />
    </n-config-provider>
  </van-config-provider>
</template>

<style lang="scss">
.menu__pop {
  transition: all 0 ease 0;
  transform: none;
  position: absolute !important;
}

.menu__overlay {
  position: absolute !important;
  top: auto;
}
</style>
