<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-12-06 17:43:42
 * @LastEditTime: 2022-12-06 17:45:05
 * @LastEditors: dingyuwen
 * @Description:
-->
<template>
  <hr class="my-1 horizontal">
</template>

<style>
hr.horizontal {
  height: 1px;
  display: flex;
  opacity: 0.25;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  background-color: transparent;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 1rem;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
}
.dark hr.horizontal {
  border: 0 solid rgba(255, 255, 255, 0.125);
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0));
}
</style>
