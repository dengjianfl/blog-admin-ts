import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import('./views/Home.vue'),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/dashboard',
                    component: () => import('./views/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/articleList',
                    component: () => import('./views/ArticleList.vue'),
                    meta: { title: '文章列表' }
                },
                {
                    path: '/addArticle',
                    component: () => import('./views/AddArticle.vue'),
                    meta: { title: '新增文章' }
                },
                {
                    path: '/donate',
                    component: () => import('./views/Donate.vue'),
                    meta: { title: '支持作者' }
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
