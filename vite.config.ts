/*
 * @Author: dingyuwen ding_yuwen@163.com
 * @Date: 2022-11-28 15:12:42
 * @LastEditTime: 2022-12-05 10:47:13
 * @LastEditors: dingyuwen
 * @Description:
 */
import path, { resolve } from 'path'
import { loadEnv } from 'vite'
import type { ConfigEnv, PluginOption, UserConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite' // vue3等插件 hooks 自动引入
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { NaiveUiResolver, VantResolver } from 'unplugin-vue-components/resolvers'
import DefineOptions from 'unplugin-vue-define-options/vite'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import ViteCompression from 'vite-plugin-compression'
import { viteVConsole } from 'vite-plugin-vconsole'

const pathSrc = resolve(__dirname, 'src')
const customIconPath = `${pathSrc}/assets/svg`

const getEnvPlugins = (command, env): (PluginOption | PluginOption[])[] => {
  const pluginList = [
    DefineOptions(),
    vue(),
    vueJsx(),
    visualizer(),

    legacy({
      targets: ['defaults', 'not IE 11'],
    }),

    // 组件自动引入
    Components({
      dts: resolve(pathSrc, 'components.d.ts'),
      resolvers: [
        NaiveUiResolver(),
        // vant组件
        VantResolver(),
        // 自动注册图标组件
        IconsResolver({
          prefix: 'icon', // 自动引入的Icon组件统一前缀，默认为 i，设置false为不需要前缀
          // {prefix}-{collection}-{icon} 使用组件解析器时，您必须遵循名称转换才能正确推断图标。
          // alias: { park: 'icon-park' } 集合的别名
          // enabledCollections: ['carbon'], // 这是可选的，默认启用 Iconify 支持的所有集合['mdi']
          customCollections: ['custom'],
        }),
      ],
      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
    }),

    Icons({
      autoInstall: true,
      // scale: 1, // 缩放
      compiler: 'vue3', // 编译方式
      defaultClass: 'inline-block', // 默认类名
      customCollections: {
        custom: FileSystemIconLoader(customIconPath),
      },
      // defaultStyle: '', // 默认样式
      // jsx: 'react' // jsx支持
    }),

    createSvgIconsPlugin({
      iconDirs: [customIconPath],
      symbolId: 'icon-custom-[dir]-[name]',
      inject: 'body-last',
      customDomId: '__CUSTOM_SVG_ICON__',
    }),

    // vue3等插件 hooks 自动引入
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
      ],
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      dirs: [resolve(pathSrc, 'composables'), resolve(pathSrc, 'hooks')],
      resolvers: [
        VantResolver(),
        // 自动导入图标组件
        // IconsResolver({
        //   prefix: 'Icon',
        // }),
      ],
      vueTemplate: true,
      dts: resolve(pathSrc, 'auto-imports.d.ts'),
    }),

    UnoCSS({
      presets: [
        presetUno({ dark: 'class' }),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      shortcuts: {
        'wh-full': 'w-full h-full',
        'flex-center': 'flex justify-center items-center',
        'flex-col-center': 'flex-center flex-col',
        'flex-x-center': 'flex justify-center',
        'flex-y-center': 'flex items-center',
        'f-c-c': 'flex justify-center flex items-center',
        'i-flex-center': 'inline-flex justify-center items-center',
        'i-flex-x-center': 'inline-flex justify-center',
        'i-flex-y-center': 'inline-flex items-center',
        'flex-col': 'flex flex-col',
        'flex-col-stretch': 'flex-col items-stretch',
        'i-flex-col': 'inline-flex flex-col',
        'i-flex-col-stretch': 'i-flex-col items-stretch',
        'flex-1-hidden': 'flex-1 overflow-hidden',
        'absolute-lt': 'absolute left-0 top-0',
        'absolute-lb': 'absolute left-0 bottom-0',
        'absolute-rt': 'absolute right-0 top-0',
        'absolute-rb': 'absolute right-0 bottom-0',
        'absolute-tl': 'absolute-lt',
        'absolute-tr': 'absolute-rt',
        'absolute-bl': 'absolute-lb',
        'absolute-br': 'absolute-rb',
        'absolute-center': 'absolute-lt flex-center wh-full',
        'fixed-lt': 'fixed left-0 top-0',
        'fixed-lb': 'fixed left-0 bottom-0',
        'fixed-rt': 'fixed right-0 top-0',
        'fixed-rb': 'fixed right-0 bottom-0',
        'fixed-tl': 'fixed-lt',
        'fixed-tr': 'fixed-rt',
        'fixed-bl': 'fixed-lb',
        'fixed-br': 'fixed-rb',
        'fixed-center': 'fixed-lt flex-center wh-full',
        'nowrap-hidden': 'whitespace-nowrap overflow-hidden',
        'ellipsis-text': 'nowrap-hidden overflow-ellipsis',
        'transition-base': 'transition-all duration-300 ease-in-out',
        'icon-btn': 'text-18 inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-primary !outline-none',
        'chart-bg': 'bg-white dark:bg-dark-400',
        // 'm-p': 'm="[var(--van-cell-group-inset-padding)]"',
      },
      rules: [
        [/^bc-(.+)$/, ([, color]) => ({ 'border-color': `#${color}` })],
        ['card-shadow', { 'box-shadow': '0 1px 2px -2px #00000029, 0 3px 6px #0000001f, 0 5px 12px 4px #00000017' }],
      ],
      transformers: [transformerDirectives(), transformerVariantGroup()],
    }),

    viteVConsole({
      entry: [path.resolve('src/main.ts')],
      localEnabled: command === 'serve',
      enabled: false,
      config: {
        maxLogNumber: 1000,
        theme: 'light',
      },
    }),
  ]

  if (env.VITE_COMPRESS === 'Y')
    pluginList.push(ViteCompression({ algorithm: 'gzip' }))

  if (env.VITE_VISUALIZER === 'Y') {
    pluginList.push(
      visualizer({
        gzipSize: true,
        brotliSize: true,
        open: true,
      }),
    )
  }

  return pluginList
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    base: env.VITE_APP_PUBLIC_PATH,

    define: {
      'process.env.VUE_APP_API_BASE_URL': JSON.stringify(env.VITE_APP_API_BASE_URL),
      'process.env.VUE_APP_PUBLIC_PATH': JSON.stringify(env.VITE_APP_PUBLIC_PATH),
    },

    plugins: getEnvPlugins(command, env),
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "./src/assets/styles/scss/variables.scss" as *;',
        },
      },
    },
    build: {
      cssCodeSplit: false,
      chunkSizeWarningLimit: 2048,
    },

    resolve: {
      alias: {
        '~@': path.join(__dirname, './src'),
        '@': path.join(__dirname, './src'),
        '~': path.join(__dirname, './src/assets'),
      },
    },

    server: {
      host: true,
      port: 3000,
      proxy: process.env.NODE_ENV !== 'production'
        ? undefined
        : {
            '/api': {
              // backend url
              target: '',
              ws: false,
              changeOrigin: true,
            },
          },
    },
  }
}
