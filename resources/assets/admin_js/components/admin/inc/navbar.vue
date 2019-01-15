<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
        <div class="container">
            <a class="navbar-brand" href="/">
                Laravel
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">

                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    <li><a v-if="auth.user.authenticated" class="nav-link" @click="logout" href="#">Logout</a></li>
                    <li><router-link class="nav-link" v-if="!auth.user.authenticated" :to="{name: 'admin_login'}" activeClass="active" exact>Login</router-link></li>
                    <li><router-link class="nav-link" v-if="!auth.user.authenticated" :to="{name: 'admin_register'}" activeClass="active" exact>Register</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import auth from '../../../admin_auth.js';
    export default {
        data() {
            return {
                auth: auth,
            }
        },
        methods : {
            logout() {
                console.log("Logout");
                auth.logout();
            },
        },
        name: "admin_navbar"
    }
</script>

<style scoped>

</style>