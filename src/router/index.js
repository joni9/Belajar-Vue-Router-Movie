import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/movies',
      name: 'MoviesList',
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Movies.vue')
    },
    {
      path: '/movies/:id',
      name: 'MoviesDetail',//nama harus beda
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MovieDetail.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',//nama harus beda
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NotFound.vue'),
    },
  ]
})

export default router
