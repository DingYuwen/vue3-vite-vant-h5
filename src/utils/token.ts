/*
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-12-28 17:36:27
 * @LastEditTime: 2022-12-28 20:33:38
 * @LastEditors: dingyuwen
 * @Description:
 */
import { lStorage } from '@/utils'
const TOKEN_CODE = 'access_token'
const DURATION = 6 * 60 * 60 * 1000

export function getToken() {
  return lStorage.get(TOKEN_CODE)
}

export function setToken(token) {
  lStorage.set(TOKEN_CODE, token, Date.now() + DURATION)
}

export function removeToken() {
  lStorage.remove(TOKEN_CODE)
}
