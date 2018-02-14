<template>
    <div class="flex-center position-ref full-height">
        <div class="top-right links">
            <!--@auth-->
            <!--<a href="{{ url('/home') }}">Home</a>-->
            <!--@else-->
            <a href="">Login</a>
            <a href="">Register</a>
            <!--@endauth-->
        </div>
        <!--@endif-->

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
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
