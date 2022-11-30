/*
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-28 15:12:42
 * @LastEditTime: 2022-11-30 16:16:45
 * @LastEditors: dingyuwen
 * @Description:
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import 'uno.css'
import '~/css/index.less'
import '~/css/global.css'

// Vant 桌面端适配
import '@vant/touch-emulator'

/* --------------------------------
Vant 中有个别组件是以函数的形式提供的，
包括 Toast，Dialog，Notify 和 ImagePreview 组件。
在使用函数组件时，unplugin-vue-components
无法自动引入对应的样式，因此需要手动引入样式。
------------------------------------- */
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app
  .use(router)
  .use(pinia)

app.mount('#app')
