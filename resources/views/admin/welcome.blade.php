<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{!! csrf_token() !!}">
        <title>{{config('app.name')}}</title>
        <!-- Style -->
        <link href="{{asset('admin_assets/css/admin.css')}}?v={{time()}}" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="admin_app">
        </div>
        <script>
            window.Laravel = <?php echo json_encode([
                'csrfToken' => csrf_token(),
            ]); ?>
        </script>
        <script src="{{asset('admin_assets/js/admin_bundle.min.js')}}"></script>
    </body>
</html>
