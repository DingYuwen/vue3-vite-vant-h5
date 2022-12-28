/*
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-12-28 17:26:10
 * @LastEditTime: 2022-12-28 22:18:33
 * @LastEditors: dingyuwen
 * @Description:
 */
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils'

const baseTitle = import.meta.env.VITE_TITLE || ''
NProgress.configure({ showSpinner: true })
const WHITE_LIST = ['/login', '/404']
export function setupRouterGuard(router) {
  router.beforeEach(async (to) => {
    NProgress.start() // start progress bar

    const token = getToken()
    const needLogin = Boolean(to.meta?.requiresAuth)

    /** 没有token的情况 */
    if (!token) {
      if (WHITE_LIST.includes(to.path) || !needLogin)
        return true
      return { path: 'login', query: { ...to.query, redirect: to.path } }
    }

    /** 有token的情况 */
    if (to.path === '/login')
      return { path: '/' }

    return true
  })

  router.afterEach((to) => {
    NProgress.done() // finish progress bar
    const pageTitle = to.meta?.title
    if (pageTitle && baseTitle)
      document.title = `${pageTitle} | ${baseTitle}`
    else
      document.title = pageTitle || baseTitle
  })
}
