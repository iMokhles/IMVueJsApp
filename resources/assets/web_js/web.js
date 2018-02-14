import Vue from 'vue';
import App from './App.vue';
import WebComponent from './components/WebComponent.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

const routes = [
    {
        name: 'Web',
        path: '/',
        component: WebComponent
    }
];

const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#web_app');