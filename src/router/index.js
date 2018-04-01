import Vue from 'vue'
import Router from 'vue-router'

//pages
import Home from '@/components/Home'
import Login from '@/components/Login'
import About from '@/components/About'
import Voluntarios from '@/components/Voluntarios'
import Estados from '@/components/Estados'
import Listas from '@/components/Listas'
import ListaConteudo from '@/components/ListaConteudo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/estados',
      name: 'Estados',
      component: Estados
    },
    {
      path: '/sobre-nos',
      name: 'About',
      component: About
    },
    {
      path: '/voluntarios',
      name: 'Voluntarios',
      component: Voluntarios
    },
    {
      path: '/:estado',
      name: 'Listas',
      component: Listas
    },
    {
      path: '/:reflista/:dslista',
      name: 'ListaConteudo',
      component: ListaConteudo
    }
  ]
})
