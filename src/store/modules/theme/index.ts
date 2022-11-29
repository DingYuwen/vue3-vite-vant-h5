/*
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-29 14:19:53
 * @LastEditTime: 2022-11-29 14:26:47
 * @LastEditors: dingyuwen
 * @Description:
 */
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme-store', {
  persist: true,
  state: () => ({
    // light || dark
    mode: '',
  }),
})
