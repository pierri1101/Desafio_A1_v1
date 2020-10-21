import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        icon: 'home', title: 'Painel de Controle'
      },
      component: () => import(/* webpackChunkName: "home" */ './pages/home/Home')
    },
    {
      name: 'Relatorio',
      path: '/Relatorio',
      meta: {
        icon: 'list-ul', title: 'Relatório'
      },
      component: () => import(
        /* webpackChunkName: "expenses-list" */
        './pages/expenses-list/Relatorio'
      )
    },
    {
      name: 'ranking',
      path: '/ranking',
      meta: {
        icon: 'list-ul', title: 'Ranking'
      },
      component: () => import(
        /* webpackChunkName: "expenses-list" */
        './pages/expenses-list/Ranking'
      )
    },
    {
      name: 'login',
      path: '/login',
      meta: { title: 'Login' },
      component: () => import(/* webpackChunkName: "login" */ './pages/login/Login')
    },
    {
      name: 'register',
      path: '/register',
      meta: { title: 'Register' },
      component: () => import(/* webpackChunkName: "register" */ './pages/register/Register')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Desafio`

  if (!window.uid && to.name !== 'login' && to.name !== 'register') {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
