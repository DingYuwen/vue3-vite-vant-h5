const Layout = () => import('@/layout/main/index.vue')
const NotFound = () => import('@/views/NotFound.vue')
const Main = () => import('@/views/Main.vue')
const Charts = () => import('@/views/Charts/index.vue')
const Login = () => import('@/views/Login.vue')

export const routes = [
  {
    path: '/',
    name: 'main',
    component: Layout,
    redirect: '/main',
    children: [
      {
        name: 'main',
        path: 'main',
        component: Main,
        meta: {
          title: 'Main',
          requiresAuth: true,
        },
      },
      {
        path: 'charts',
        name: 'charts',
        component: Charts,
        meta: {
          title: 'Charts',
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'NotFound',
    },
  },
  {
    name: 'Login',
    path: '/login',
    component: Login,
    meta: {
      title: 'login',
    },
  },
]
