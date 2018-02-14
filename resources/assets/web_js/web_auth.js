import axios from './web.js';
import {router} from './web.js';

export default {
    user: {
        authenticated: false,
        profile: null
    },
    me() {
        let token = localStorage.getItem('web_auth_token');
        if (token !== null) {
            axios.post('/api/auth/me', {
                token: token
            }).then(response =>  {
                this.user.authenticated = true;
                this.user.profile = response.data.result;
                return true;
            }).catch(error => {
                toastr['error'](error);
                return false;
            });
        }
    },
    check() {
        let token = localStorage.getItem('web_auth_token');
        if (token !== null) {
            axios.post('/api/auth/check', {
                token: token
            }).then(response =>  {
                this.user.authenticated = true;
                this.user.profile = response.data.result;
            }).catch(error => {
                this.refresh();
            });
        }
    },
    refresh() {
        let token = localStorage.getItem('web_auth_token');
        if (token !== null) {
            axios.post('/api/auth/refresh', {
                token: token
            }).then(response =>  {
                this.user.authenticated = true;
                this.user.profile = response.data.result.user_info;
            }).catch(error => {
                toastr['error'](error);
            });
        }
    },
    register(name, email, password, passwordConfirmation) {
        axios.post(
            '/api/auth/register',
            {
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
            }
        ).then(response =>  {
            toastr['success'](response.data.result);
            router.push({
                name: 'web_login'
            })
        }).catch(error => {
            toastr['error'](error.response.data.result);
        });
    },
    login(email, password) {
        axios.post(
            '/api/auth/login',
            {
                email: email,
                password: password,
            }
        ).then(response =>  {
            localStorage.setItem('web_auth_token', response.data.result.access_token);
            this.user.authenticated = true;
            this.user.profile = response.data.result.user_info;
            router.push({
                name: 'web_home'
            });
        }).catch(error => {
            toastr['error'](error.response.data.result);
        });
    },
    logout() {
        return axios.post('/api/auth/logout').then(response =>  {
            localStorage.removeItem('web_auth_token');
            axios.defaults.headers.common['Authorization'] = null;
            router.push({
                name: 'web_welcome'
            });
        }).catch(error => {
            toastr['error'](error.response.data.result);
        });
    }
}