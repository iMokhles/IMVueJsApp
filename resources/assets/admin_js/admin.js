import Vue from 'vue';
import App from './App.vue';
import AdminComponent from './components/AdminComponent.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

const routes = [
    {
        name: 'Admin',
        path: '/admin',
        component: AdminComponent
    }
];

const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#admin_app');