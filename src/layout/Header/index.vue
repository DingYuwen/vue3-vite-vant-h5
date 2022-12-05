<!--
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-29 16:45:20
 * @LastEditTime: 2022-12-05 18:12:14
 * @LastEditors: dingyuwen
 * @Description:
-->
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/store'

const appStore = useAppStore()
defineOptions({ name: 'Header' })

/*
const position = 'top'
const showPopup = ref(false)
const barRef = ref<HTMLElement>()
watch(showPopup, (v) => {
  console.log(v)
})
const { bottom, top } = useElementBounding(barRef)

const style = computed(() => {
  let offset = 0
  if (position === 'top') {
    offset = bottom.value
    return { top: `${offset}px`, height: '30%' }
  }
  else {
    offset = window.innerHeight - top.value
    return { bottom: `${offset}px`, height: '30%' }
  }
})
const handleClose = () => {
  console.log('handleClose')
}
*/
const { y } = useWindowScroll()
const { isNavFixed, menuClose, navbarMinimize, isTransparent } = storeToRefs(appStore)
const navbarMainClasses = computed(() => {
  return isNavFixed.value && (y.value > 10) ? ['sticky', 'shadow-blur', 'top-1', 'z-36', 'mx-2'] : 'mx-4'
})
</script>

<template>
  <header
    v-bind="$attrs"
    class="navbar-main rd-4 mt-6 px-0 py-2 relative flex-y-center justify-between flex-wrap"
    :class="navbarMainClasses"
  >
    <div w-full py-1 px-3>
      <div>
        <span>Dashboard / index</span>
        <h5 font-bold>
          Template for Vue3 Vant Mobile
        </h5>
      </div>
      <div flex flex-y-center mt-2 justify-between>
        <div>
          <div lg:hidden @click="appStore.$patch({ menuClose: !menuClose })">
            <icon-mdi-menu v-if="menuClose" />
            <icon-mdi-menu-close v-else />
          </div>
        </div>
        <div flex justify-end>
          <!-- <div><icon-mdi-cog /></div> -->
          <div px-3 @click="appStore.$patch({ isNavFixed: !isNavFixed })">
            <icon-mdi-pin v-if="!isNavFixed" />
            <icon-mdi-pin-off v-else />
          </div>
          <dark-mode-switch />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.navbar-main {
    transition: box-shadow 0.25s ease-in, background-color 0.25s ease-in;
}
.shadow-blur {
  backdrop-filter: saturate(200%) blur(30px);
  background-color: rgba(255, 255, 255, 0.6) !important;
  box-shadow: inset 0 0px 1px 1px rgb(254 254 254 / 70%), 0 20px 27px 0 rgb(0 0 0 / 5%) !important;
}
</style>
