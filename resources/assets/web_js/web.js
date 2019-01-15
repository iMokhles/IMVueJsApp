import Vue from 'vue';
import App from './App.vue';
import home from './components/web/home.vue';
import welcome from './components/web/welcome.vue';
import login from './components/web/auth/login.vue';
import register from './components/web/auth/register.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
import auth from './web_auth.js';

Vue.use(VueAxios, axios);

const routes = [
    {
        name: 'web_welcome',
        path: '/',
        component: welcome,
    },
    {
        name: 'web_home',
        path: '/home',
        secure: true,
        component: home,
    },
    {
        name: 'web_login',
        path: '/login',
        component: login,
    },
    {
        name: 'web_register',
        path: '/register',
        component: register,
    }
];

export default axios;
export var router = new VueRouter({ mode: 'history', routes: routes});
router.beforeEach((to, from, next) => {
    // Look at all routes
    router.options.routes.forEach((route) => {
        // If this is the current route and it's secure
        if (to.matched[0].path === route.path && route.secure) {
            // Verify that the user isn't logged in
            // auth.me();
            if (!auth.user.authenticated) {
                next('/login');
            } else {
                next();
            }
        }
    });
    // Proceed as normal
    next();
});

new Vue(Vue.util.extend({ router }, App)).$mount('#web_app');