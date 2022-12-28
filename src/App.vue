<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-28 15:12:42
 * @LastEditTime: 2022-12-28 21:15:14
 * @LastEditors: dingyuwen
 * @Description:
-->
<script setup lang="ts">
import { isDark } from '@/composables'
</script>

<template>
  <van-config-provider min-h-screen flex flex-col :theme="isDark ? 'dark' : 'light'">
    <router-view />
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
