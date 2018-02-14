## IMVueJsApp: Multi Guards/Routes Laravel + VueJs Applications for UI

Laravel 5.6 example with Multiple VueJs apps ( Front-end (Web) and Back-end (Admin) ) + JWT Auth

## Install

1) Run in your terminal:

``` bash
$ git clone https://github.com/iMokhles/IMVueJsApp.git IMVueJsApp
```

2) Set your database information in your .env file (use the .env.example as an example);

3) Run in your IMVueJsApp folder:
``` bash
$ composer install
$ npm install
$ npm install --save-dev vue-axios vue-loader vue-router vue-template-compiler
$ cp .env.example .env
$ php artisan key:generate
$ php artisan jwt:secret
$ php artisan migrate:refresh --seed
$ npm run watch
$ php artisan serve
```



# TODO

- [ ] Improve authentication support
- [ ] Add AdminLte
- [ ] Add Crud generator for .vue files


## Contributing

Thank you for considering contributing to IMVueJsApp! The contribution guide can be found in the [Laravel documentation](http://imokhles.com).

## Security Vulnerabilities

If you discover a security vulnerability within IMVueJsApp, please send an e-mail to Mokhlas Hussein at mokhleshussien@aol.com. All security vulnerabilities will be promptly addressed.

## Thanks

- **[Laravel Framework](http://laravel.com)**


## License

The GPL v3 License (GNU GENERAL PUBLIC LICENSE Version 3). Please see [License File](LICENSE.md) for more information.
