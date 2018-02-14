let mix = require('laravel-mix');
var plugin =  'resources/assets/plugins/';

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
    .combine([
        plugin + 'jquery/jquery.min.js',
        plugin + 'popper/popper.min.js',
        plugin + 'moment/moment.min.js',
        plugin + 'toastr/toastr.min.js',
        'public/admin_assets/js/admin.js',
    ],'public/admin_assets/js/admin_bundle.min.js')
    .sass('resources/assets/admin_js/sass/admin.scss', 'public/admin_assets/css')
    /*Web assets*/
    .js('resources/assets/web_js/web.js', 'public/web_assets/js')
    .combine([
        plugin + 'jquery/jquery.min.js',
        plugin + 'popper/popper.min.js',
        plugin + 'moment/moment.min.js',
        plugin + 'toastr/toastr.min.js',
        'public/web_assets/js/web.js',
    ],'public/web_assets/js/web_bundle.min.js')
    .sass('resources/assets/web_js/sass/web.scss', 'public/web_assets/css');
