/*
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-29 19:03:53
 * @LastEditTime: 2022-12-28 20:51:05
 * @LastEditors: dingyuwen
 * @Description:
 */
import { createStore } from 'store/src/store-engine'
import expirePlugin from 'store/plugins/expire'
import * as localStorage from 'store/storages/localStorage'

const prefixKey = 'Vue_Vite_DYW_'
export const lStorage = createStore(localStorage, expirePlugin, prefixKey)

export default lStorage
