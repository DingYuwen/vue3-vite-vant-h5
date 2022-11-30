<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-29 16:45:20
 * @LastEditTime: 2022-11-30 11:21:12
 * @LastEditors: dingyuwen
 * @Description:
-->
<script setup lang="ts">
defineOptions({ name: 'Header' })
</script>

<template>
  <header class="w-screen h-12 lg:h-15 p-4 lg:p-5 flex-y-center justify-between fixed z-36">
    <div class="inline-flex">
      <organization-filter lg:hidden />
    </div>
    <div class="hidden lg:inline-flex">
      <organization-cascader />
    </div>
    <div inline-flex>
      <dark-mode-switch />
    </div>
  </header>
</template>
