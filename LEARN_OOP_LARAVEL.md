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

## Create a new projet (laravel and composer works fine)
1. `laravel new project2`
2. `cd /c/wamp64/www/project2`
3. `php artisan serve`

## Clonned project
1. `composer install`
2. duplicate .env.example and rename -> .env
3. php artisan key:generate

## Install Debug_bar / composer

[laravel-debugbar](https://github.com/barryvdh/laravel-debugbar)     
```
composer require barryvdh/laravel-debugbar
```

## Install laravel plugins

On sublime text :
<kbd>ctrl</kbd><kbd>shift</kbd><kbd>p</kbd>      
type : `Package control: install Package`     
search packages `blade highliter`     
