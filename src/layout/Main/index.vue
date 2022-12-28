<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-12-28 21:13:14
 * @LastEditTime: 2022-12-28 21:15:52
 * @LastEditors: dingyuwen
 * @Description:
-->
<script lang="ts" setup>
import { Footer, Header } from '../index'
</script>

<template>
  <Header />
  <!-- <div m-4>
        <Tab h-24px lg:h-30px />
      </div> -->
  <main flex-grow-1 m-4>
    <!-- <h6 m-2 c="[var(--van-text-color)]">
          Template for Vue3 Vant Mobile
        </h6> -->
    <router-view />
  </main>
  <Footer />
</template>
