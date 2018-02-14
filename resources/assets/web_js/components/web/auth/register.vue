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
                            <div class="card-header">Register</div>

                            <div class="card-body">
                                <form method="POST" id="registerForm" @submit.prevent="submit">

                                    <div class="form-group row">
                                        <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                                        <div class="col-md-6">
                                            <input id="name" type="text" class="form-control" v-model="registerForm.name" name="name" value="" required autofocus>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                        <div class="col-md-6">
                                            <input id="email" type="email" class="form-control" v-model="registerForm.email" name="email" value="" required>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                        <div class="col-md-6">
                                            <input id="password" type="password" class="form-control" v-model="registerForm.password" name="password" required>
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                                        <div class="col-md-6">
                                            <input id="password-confirm" type="password" class="form-control" v-model="registerForm.password_confirmation" name="password_confirmation" required>
                                        </div>
                                    </div>

                                    <div class="form-group row mb-0">
                                        <div class="col-md-8 offset-md-4">
                                            <button type="submit" class="btn btn-primary">
                                                Register
                                            </button>
                                            <router-link :to="{name: 'web_login'}" class="btn btn-link">Already have account ?</router-link>
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
                registerForm: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                }
            }
        },
        methods: {
            register(name, email, password, passwordConfirmation) {
                auth.register(name, email, password, passwordConfirmation)
            },
            submit(e) {
                this.register(this.loginForm.name, this.loginForm.email, this.loginForm.password, this.loginForm.password_confirmation);
            }
        },
        components: {
            WebNavBar
        },
        name: "web_register"
    }
</script>