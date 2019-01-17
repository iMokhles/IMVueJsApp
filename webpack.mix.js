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
    .copy('node_modules/framework7-icons/fonts/Framework7Icons-Regular.eot', 'public/fonts/Framework7Icons-Regular.eot' )
    .copy('node_modules/framework7-icons/fonts/Framework7Icons-Regular.woff2', 'public/fonts/Framework7Icons-Regular.woff2' )
    .copy('node_modules/framework7-icons/fonts/Framework7Icons-Regular.woff', 'public/fonts/Framework7Icons-Regular.woff' )
    .copy('node_modules/framework7-icons/fonts/Framework7Icons-Regular.ttf', 'public/fonts/Framework7Icons-Regular.ttf' )

    .styles([
        'node_modules/framework7-icons/css/framework7-icons.css',
    ], 'public/css/framework7-icons.css')
    .styles([
        'node_modules/framework7/css/framework7.css',
    ], 'public/css/framework7.css')
    .styles([
        'node_modules/framework7/css/framework7.ios.css',
    ], 'public/css/framework7.ios.css')
    .js('node_modules/framework7/js/framework7.min.js', 'public/js')
    .js('node_modules/framework7-vue/framework7-vue.min.js', 'public/js')

    .js('resources/assets/admin_js/admin.js','public/admin_assets/js')
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
