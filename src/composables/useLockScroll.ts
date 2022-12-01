/*
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-12-01 22:16:58
 * @LastEditTime: 2022-12-01 22:17:02
 * @LastEditors: dingyuwen
 * @Description:
 */
const body = document.body
let count = 0

const CLSNAME = 'overflow-hidden'

export const useLockScroll = (isLock: () => boolean) => {
  const lock = () => {
    if (isLock()) {
      !count && body.classList.add(CLSNAME)
      count++
    }
  }

  const unlock = () => {
    if (isLock() && count) {
      count--
      !count && body.classList.remove(CLSNAME)
    }
  }

  return [lock, unlock]
}
