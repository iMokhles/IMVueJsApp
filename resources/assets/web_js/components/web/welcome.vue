<style>
    html, body {
        background-color: #fff;
        color: #636b6f;
        font-family: 'Raleway', sans-serif;
        font-weight: 100;
        height: 100vh;
        margin: 0;
    }

    .full-height {
        height: 100vh;
    }

    .flex-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }

    .position-ref {
        position: relative;
    }

    .top-right {
        position: absolute;
        right: 10px;
        top: 18px;
    }

    .content {
        text-align: center;
    }

    .title {
        font-size: 84px;
    }

    .links > a {
        color: #636b6f;
        padding: 0 25px;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: .1rem;
        text-decoration: none;
        text-transform: uppercase;
    }

    .m-b-md {
        margin-bottom: 30px;
    }
</style>
<template>
    <div class="flex-center position-ref full-height">
        <div class="top-right links">
            <router-link v-if="auth.user.authenticated" :to="{name: 'web_home'}" activeClass="active" exact>Home</router-link>
            <router-link v-if="!auth.user.authenticated" :to="{name: 'web_login'}" activeClass="active" exact>Login</router-link>
            <router-link v-if="!auth.user.authenticated" :to="{name: 'web_register'}" activeClass="active" exact>Register</router-link>
        </div>
        <div class="content">
            <div class="title m-b-md">
                Laravel Web
            </div>

            <div class="links">
                <a href="https://laravel.com/docs">Documentation</a>
                <a href="https://laracasts.com">Laracasts</a>
                <a href="https://laravel-news.com">News</a>
                <a href="https://forge.laravel.com">Forge</a>
                <a href="https://github.com/laravel/laravel">GitHub</a>
            </div>
        </div>
    </div>
</template>

<script>
    import auth from '../../web_auth.js';

    export default {
        data() {
            return {
                auth: auth
            }
        },
        methods: {
            signout() {
                auth.signout()
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                auth.check()
            })
        },
        name: "web_welcome"
    }
</script>