import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Conoceme from './views/Conoceme.vue'
import Proyectos from './views/Proyectos.vue'
import Habilidades from './views/Habilidades.vue'
import Contactar from './views/Contactar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/conoceme',
      // name: 'conoceme',
      component: Conoceme
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/mis-proyectos',
      component: Proyectos
    },
    {
      path: '/mis-habilidades',
      component: Habilidades
    },
    {
      path: '/contactame',
      component: Contactar
    }
  ]
})
