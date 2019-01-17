<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{!! csrf_token() !!}">
        <title>{{config('app.name')}}</title>
        <!-- Style -->
        <link href="{{asset('css/framework7.css')}}?v={{time()}}" rel="stylesheet" type="text/css">
        <link href="{{asset('css/framework7-icons.css')}}?v={{time()}}" rel="stylesheet" type="text/css">
        <link href="{{asset('css/framework7.ios.css')}}?v={{time()}}" rel="stylesheet" type="text/css">
        <link href="{{asset('web_assets/css/web.css')}}?v={{time()}}" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet">
    </head>
    <body>
        <div id="web_app">
        </div>
        <script>
            window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
            ]); ?>
        </script>
        <script src="{{asset('js/framework7.min.js')}}"></script>
        <script src="{{asset('js/framework7-vue.min.js')}}"></script>
        <script src="{{asset('web_assets/js/web_bundle.min.js')}}"></script>
    </body>
</html>
