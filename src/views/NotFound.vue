<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-12-28 15:39:38
 * @LastEditTime: 2022-12-29 17:55:30
 * @LastEditors: dingyuwen
 * @Description:
-->

<script setup lang="ts">
import { useElementBounding } from '@vueuse/core'
import Malfunction from '@/components/common/Malfunction.vue'

const el = ref(null)
const tabBar = ref(null)
const { x, left, width, height } = useElementBounding(el)

const btnList = ['all', 'email', 'number', 'weChat']

const active = ref(btnList[0])
const handleBtnClick = ($event, btn) => {
  el.value = $event.target
  active.value = btn
  console.log(x.value, left.value, width.value)
}
const b_style = computed(() => {
  const tabBarLeft = tabBar.value?.offsetLeft + 5
  return {
    width: `${width.value}px`,
    height: `${height.value}px`,
    transform: `translate(${x.value - tabBarLeft}px)`,
  }
})
onMounted(() => {
  el.value = document.querySelector('.d-tab .active')
})
</script>

<template>
  <div wh-full flex-1 f-c-c flex-col>
    <Malfunction text="404" />
    <div mt-6 class="d-tab">
      <div
        ref="tabBar"
        p-4px flex relative
        rounded-full shadow-md
        c="[#a6a7ab]" box-border
        class="dark:bg-[#25262b] dark:border border-[#4f5055]"
      >
        <div
          py-4px px-12px rounded-full absolute
          transition-all duration-300
          bg-gradient-to-r from-indigo-500
          via-purple-500 to-pink-500 z-0
          :style="b_style"
        />
        <div
          v-for="btn in btnList" :key="btn"
          py-4px px-12px rounded-full relative z-1
          :class="active === btn ? 'text-white active' : ''"
          @click="handleBtnClick($event, btn)"
        >
          {{ btn }}
        </div>
      </div>
    </div>
  </div>
</template>
