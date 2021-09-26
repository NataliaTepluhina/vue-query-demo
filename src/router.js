import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./views/Home.vue'),
  },
  {
    path: '/characters/:id',
    name: 'character',
    component: () => import('./views/Character.vue'),
    props: true,
  },
]

export default createRouter({
  routes,
  history: createWebHistory(),
})
