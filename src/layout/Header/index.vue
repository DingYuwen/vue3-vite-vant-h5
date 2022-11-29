<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-29 16:45:20
 * @LastEditTime: 2022-11-29 18:41:36
 * @LastEditors: dingyuwen
 * @Description:
-->
<script setup lang="ts">
defineOptions({ name: 'Header' })
</script>

<template>
  <header class="w-screen h-12 p-2 flex-y-center justify-between fixed z-36">
    <div inline-flex>
      <organization-filter />
    </div>
    <div inline-flex>
      <dark-mode-switch />
    </div>
  </header>
</template>
