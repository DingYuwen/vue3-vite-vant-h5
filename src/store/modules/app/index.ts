/*
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-29 14:20:22
 * @LastEditTime: 2022-11-29 14:27:07
 * @LastEditors: dingyuwen
 * @Description:
 */
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app-store', {
  persist: true,
  state: () => ({
    // light || dark
    mode: '',
  }),
})
