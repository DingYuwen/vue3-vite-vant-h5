/*
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-29 19:03:52
 * @LastEditTime: 2022-12-28 22:06:25
 * @LastEditors: dingyuwen
 * @Description:
 */
import request from '@/utils/request'

export async function login(params): Promise<any> {
  return request.post('/login', params)
}
