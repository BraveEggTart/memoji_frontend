// 需要鉴权的业务路由
import type { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('../views/home.vue'),
  },
];

export default asyncRoutes;
