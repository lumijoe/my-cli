import Vue from 'vue'
import Router from 'vue-router'
import Home from '../../src/views/HomeView.vue'
import AboutView from '../../src/views/AboutView.vue'

// Vue Routerを有効化
Vue.useAttrs(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,

    // ルーティングテーブルを定義
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        }
    ]
})