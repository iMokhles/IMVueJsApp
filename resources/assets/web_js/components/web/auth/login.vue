<style scoped>

</style>
<template>
    <div id="app">
        <web-nav-bar>
        </web-nav-bar>
        <main class="py-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card card-default">
                            <div class="card-header">Login</div>

                            <div class="card-body">
                                <form method="POST" id="loginForm" @submit.prevent="submit">
                                    <div class="form-group row">
                                        <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail Address</label>

                                        <div class="col-md-6">
                                            <input id="email" type="email" class="form-control" v-model="loginForm.email" name="email" value="" required autofocus>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                        <div class="col-md-6">
                                            <input id="password" type="password" class="form-control" v-model="loginForm.password" name="password" required>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-0">
                                        <div class="col-md-8 offset-md-4">
                                            <button type="submit" class="btn btn-primary">
                                                Login
                                            </button>
                                            <router-link :to="{name: 'web_home'}" class="btn btn-link">Forgot Your Password?</router-link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import WebNavBar from '../inc/navbar.vue'
    import auth from '../../../web_auth.js';
    export default {
        data() {
            return {
                auth: auth,
                loginForm: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            login(email, password) {
                auth.login(email, password)
            },
            submit(e) {
                this.login(this.loginForm.email, this.loginForm.password);
            }
        },
        components: {
            WebNavBar
        },
        name: "web_login"
    }
</script>