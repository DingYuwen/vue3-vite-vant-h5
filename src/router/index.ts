/*
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-29 19:03:53
 * @LastEditTime: 2022-12-28 21:45:44
 * @LastEditors: dingyuwen
 * @Description:
 */
// https://router.vuejs.org/zh/
import { createRouter, createWebHistory } from 'vue-router'
import { setupRouterGuard } from './guard'
import { routes } from './routes'

export const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_PUBLIC_PATH),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export async function setupRouter(app) {
  // await addDynamicRoutes()
  setupRouterGuard(router)
  app.use(router)
}
