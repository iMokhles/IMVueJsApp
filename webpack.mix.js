let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    /*Admin assets*/
    .js('resources/assets/admin_js/admin.js', 'public/admin_assets/js')
    .sass('resources/assets/admin_js/sass/admin.scss', 'public/admin_assets/css')
    /*Web assets*/
    .js('resources/assets/web_js/web.js', 'public/web_assets/js')
    .sass('resources/assets/web_js/sass/web.scss', 'public/web_assets/css');
