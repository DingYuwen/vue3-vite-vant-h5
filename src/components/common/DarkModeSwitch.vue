<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-29 16:11:10
 * @LastEditTime: 2022-12-05 18:07:17
 * @LastEditors: dingyuwen
 * @Description:
-->
<script setup lang="ts">
import { isDark } from '@/composables'

watch(isDark, (v) => {
  document.querySelector('html').setAttribute('data-theme', v ? 'dark' : 'light')
}, { immediate: true })
</script>

<template>
  <div class="inline-flex" @click="() => toggleDark()">
    <icon-mdi-brightness-2 v-if="isDark" />
    <icon-mdi-white-balance-sunny v-else />
    <!-- <i dark:i-mdi-moon-waning-crescent i-mdi-white-balance-sunny @click="toggleDark()" /> -->
  </div>
</template>

<style scoped></style>
