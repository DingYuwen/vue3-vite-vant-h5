<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-29 16:11:10
 * @LastEditTime: 2022-11-29 17:39:55
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
  <div class="text-18px inline-flex" @click="() => toggleDark()">
    <icon-mdi-moon-waning-crescent v-if="isDark" />
    <icon-mdi-white-balance-sunny v-else />
  </div>
</template>

<style scoped></style>
