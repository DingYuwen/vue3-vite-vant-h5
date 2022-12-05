/*
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-29 14:20:22
 * @LastEditTime: 2022-12-05 18:03:05
 * @LastEditors: dingyuwen
 * @Description:
 */
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app-store', {
  persist: true,
  state: () => ({
    mode: 'dark',
    menuClose: true,
    isNavFixed: false,
    navbarMinimize: false,
    isTransparent: 'bg-transparent',
  }),
})
