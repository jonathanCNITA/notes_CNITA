# LEARN OOP & LARAVEL

## Install laravel / composer

1. install [composer](https://getcomposer.org/)
2. SET php 7.1.9 (last version)
3. Create the laravel installer `composer global require "laravel/installer"`
4. go to `/c/wamp64/www`
5. open git bash and create your new project `laravel new coffee_machine`
6. In your web browser `http://localhost/coffee_machine/server.php`**Make sure to have php 7.1.9 running in wamp** OR
6. in git bash `cd /c/wamp64/www/ coffee_machine`
7. Then launch artisan (friendly laravel server) : `php artisan serve`
8. go to `http://127.0.0.1:8000/`

Change the first default page : coffee_machine > ressources > views > welcome.blade.php

## Install Debug_bar / composer

[laravel-debugbar](https://github.com/barryvdh/laravel-debugbar)     
```
composer require barryvdh/laravel-debugbar --dev
```

## Next