import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ArticleComp from './components/ArticleComp.vue'
import PageComp from './components/PageComp.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/article/:aid',
      name: 'article',
      component: ArticleComp,
      props: true,
      children: [
        {
          path: 'pages/:page_num',
          name: 'page',
          component: PageComp,
          props: true,
        }
      ]
    }
  ]
})
