import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/dashboard',
            name: 'dashboard'
        },
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home.vue'),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: () => import('./views/Dashboard.vue'),
                    name: 'dashboard',
                    meta: { title: '系统首页', keepAlive: true }
                },
                {
                    path: '/articleList',
                    component: () => import('./views/ArticleList.vue'),
                    name: 'articleList',
                    meta: { title: '文章列表', keepAlive: true }
                },
                {
                    path: '/addArticle',
                    component: () => import('./views/AddArticle.vue'),
                    name: 'addArticle',
                    meta: { title: '新增文章', keepAlive: true }
                },
                {
                    path: '/articleDetails',
                    component: () => import('./views/ArticleDetails.vue'),
                    name: 'articleDetails',
                    meta: { title: '文章详情', keepAlive: false }
                },
                {
                    path: '/donate',
                    component: () => import('./views/Donate.vue'),
                    name: 'donate',
                    meta: { title: '支持作者', keepAlive: true }
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/Register.vue'),
        },
    ],
});
