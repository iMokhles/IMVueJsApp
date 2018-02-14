import axios from './admin.js';
import {router} from './admin.js';

export default {
    user: {
        authenticated: false,
        profile: null
    },
    me() {
        let token = localStorage.getItem('admin_auth_token');
        if (token !== null) {
            axios.post('/admin_api/auth/me', {
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
        let token = localStorage.getItem('admin_auth_token');
        if (token !== null) {
            axios.post('/admin_api/auth/check', {
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
        let token = localStorage.getItem('admin_auth_token');
        if (token !== null) {
            axios.post('/admin_api/auth/refresh', {
                token: token
            }).then(response =>  {
                localStorage.setItem('admin_auth_token', response.data.result.access_token);
                this.user.authenticated = true;
                this.user.profile = response.data.result.user_info;
            }).catch(error => {
                toastr['error'](error);
            });
        }
    },
    register(name, email, password, passwordConfirmation) {
        axios.post(
            '/admin_api/auth/register',
            {
                name: name,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
            }
        ).then(response =>  {
            toastr['success'](response.data.result);
            router.push({
                name: 'admin_login'
            })
        }).catch(error => {
            toastr['error'](error.response.data.result);
        });
    },
    login(email, password) {
        axios.post(
            '/admin_api/auth/login',
            {
                email: email,
                password: password,
            }
        ).then(response =>  {
            localStorage.setItem('admin_auth_token', response.data.result.access_token);
            this.user.authenticated = true;
            this.user.profile = response.data.result.user_info;
            router.push({
                name: 'admin_home'
            })
        }).catch(error => {
            toastr['error'](error.response.data.result);
        });
    },
    logout() {
        let token = localStorage.getItem('admin_auth_token');
        if (token !== null) {
            return axios.post('/admin_api/auth/logout', {
                token: token
            }).then(response =>  {
                localStorage.removeItem('admin_auth_token');
                axios.defaults.headers.common['Authorization'] = null;
                router.push({
                    name: 'admin_welcome'
                })
            }).catch(error => {
                toastr['error'](error.response.data.result);
            });
        }
    }
}