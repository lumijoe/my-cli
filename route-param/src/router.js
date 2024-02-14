// route-param/src/router.js

import Vue from 'vue'
import Router from 'vue-router'
import Home from '../../src/views/Home.vue'
import Article from '../../src/components/Article.vue'
import About from '../../src/views/About.vue'

Vue.use(Router)

export default new Router ({
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
            component: About
        },
        {
            path: '/article/:aid',
            name: 'article',
            component: Article,
            props: true
        }
    ]
})