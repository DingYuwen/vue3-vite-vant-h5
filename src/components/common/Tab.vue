<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-30 14:53:24
 * @LastEditTime: 2022-11-30 16:32:54
 * @LastEditors: dingyuwen
 * @Description:
-->
<script setup lang="ts">
import { showToast } from 'vant'
const active = ref(0)
const onClickTab = ({ title }) => showToast(title)
</script>

<template>
  <van-tabs v-model:active="active" shrink @click-tab="onClickTab">
    <van-tab v-for="index in 8" :key="index" :title="`选项 ${index}`" />
  </van-tabs>
</template>

<style scoped lang="less">
:deep(.van-tabs__wrap){
  height: 100%;
}
:deep(.van-tabs__nav) {
  padding: 0;
  background: none;
  border: none;
  .van-tab{
    border: none;
    border-radius: var(--van-radius-sm);
  }
  .van-tabs__line{
    display: none;
  }
  .van-tab--active{
    background-color: rgb(231, 245, 255);
    color: rgb(34, 139, 230);
  }
}
</style>
