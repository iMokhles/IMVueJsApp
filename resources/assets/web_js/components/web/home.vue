<template>
    <div id="app">
        <web-nav-bar>
        </web-nav-bar>
        <main class="py-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card card-default">
                            <div class="card-header">Dashboard</div>

                            <div class="card-body">
                                You are logged in!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import WebNavBar from './inc/navbar.vue'
    import auth from '../../web_auth.js';
    export default {
        data() {
            return {
                auth: auth,
            }
        },
        methods: {

        },
        components: {
            WebNavBar
        },
        mounted: function () {
            this.$nextTick(function () {
                auth.check()
            })
        },
        name: "web_home"
    }
</script>

<style scoped>

</style>