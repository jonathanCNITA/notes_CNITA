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
composer require barryvdh/laravel-debugbar --dev
```

## Install laravel plugins

On sublime text :
<kbd>ctrl</kbd><kbd>shift</kbd><kbd>p</kbd>      
type : `Package control: install Package`     
search packages `blade highliter`  


## Controller

**Route Controller View** 3 is the magic number
[Create a controller with artisan:](https://laravel.com/docs/5.5/controllers#resource-controllers)
```bash
php artisan make:controller nomController --resource
```

`--resource` will make all CRUD methods 


### 1- Change route wep.php
Routes -> web.php

Original version 
```php
Route::get('ventes', function () {
    return view('pages/ventes');
});
```

Controller version (call the liste function of the Object OrderController)
```php
Route::get('ventes', 'OrderController@liste');
```

Controller with params
```php
Route::get('ventes/{yourParam}', 'OrderController@liste');
```

Call it in the view:
```
<a href="/adress/{{ $k->id}}">select</a>
```

**TIPS**
You could also add a label to the Route:
```php
Route::get('ventes', 'OrderController@liste')->name('myOrders');
```

And call it in the view:
```php
<a href="{{route('boissonData', [$k->id])}}">select</a>
```

### 2- Create the class for Controller

App -> Http -> Controller
Create a file with the name of your class and your function for the view.     
```php
<?php

namespace App\Http\Controllers;

class OrderController extends Controller {
	function liste() {
		return view('pages/ventes');
	}
}
```

OR use artisan : 
```bash
php artisan make:controller nameController --resource
``` 

## 4- Create Model & Migration with artisan

The model is use to communicate ith the database.
[LARAVEL ELOQUENT](https://www.grafikart.fr/formations/laravel/eloquent)

database > migration

/!\ Uppercase singular when you make a model/!\ 
```bash
php artisan make:model Boisson -m
```

This will create the model file ex Boisson.php  and the `-m` will create the migration file.


Add some data to the table
```php
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('slug')->unique();
            $table->longText('content');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
```

The make the migrate
```bash
php artisan migrate
```
/!\ [If you see: Syntax error or access violation: 1071 ](https://laravel-news.com/laravel-5-4-key-too-long-error) /!\ 

**WAY 1**
Add a row:
```bash
php artisan tinker
>>> $post = new App\Post();
>>> $post->title = "test post";
>>> $post->slug = "test-post";
>>> $post->content = "bla bla bla blabla ...";
>>> $post->save();
```

The check your database, you should see the new row.

**WAY 2**
/!\ In the model file create protected $fillable variable /!\ 
```php
class Post extends Model {
	protected $fillable = [
		'title',
		'slug',
		'content',
	];
}
```


```bash
php artisan tinker
>>> $post = new App\Post::create(['title' => 'Post 2', 'slug' => 'post_2', 'content' => 'this is the content of post 2']);
```

## 5- Queries ORM ELOQUENT



Search id 2
```php
$post = App\Post::find(2);
$post->toArray();
```

Return all table
```php

App\Post::all()->toArray();
```

```php
$post = App\Post::where('content', 'bla bla')->get();
$post = App\Post::where('content', 'bla bla')->first();
```

Get all order by
```php
$boissons = Boisson::orderBy('name')->get();
// OR for descendant
$boissons = Boisson::orderBy('nom', 'desc')->get();
// OR
$results = Project::all()->sortBy("name");
// OR for descendant
$results = Project::all()->sortByDesc("name");
```

[Available Methods](https://laravel.com/docs/5.1/collections)

## Authentication in laravel

[A good video](https://www.youtube.com/watch?v=P3g_zR0EkjQ)     
[Authentication - doc laravel](https://laravel.com/docs/5.5/authentication)     
Laravel have an authentification integrated so for the basic you just need to set it up on.     

Create all the files for authentication
```bash
php artisan make:auth
```

Laravel have by default 2 migrations files : create_users_table.php & create_password_resets_table.php
```bash
php artisan migrate
```

problems ? :

app/Providers/AppServiceProvider.php
```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}

```

**Now you can be registred as a user in the DB**

For limit the access to some part of your website add this in the top of your controller
```php
public function __construct()
{
    $this->middleware('auth');
}
```


```php
<?php

namespace App\Http\Controllers;

use App\Drink;
use App\Ingredient;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;


class DrinksController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $drinks = Drink::all();
        $data = ['drinks'=> $drinks, 'userRole' => $userRole ];

        return view("drinks/drinks", $data);
    }


// ......... rest of code

```

### For have various levels of auth like user/admin
1. Create a migration file to add a auth column
For example in the create_users_table.php migration file.
```
 public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->string('auth')->default('user');
            $table->rememberToken();
            $table->timestamps();
        });
    }
```

2. with `php artisan tinker edit your auth with admin`



## Migrations files.

```
php artisan make:migration nom_genre_bien_commit
```


Open the file database/migration/2018_02_17_nom_genre_bien_commit
```php
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Test extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string("admin_auth")->default("user");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn("admin_auth");
        });
    }
    
}
```

Then
```
php artisan migrate
```

## Relation 

### 1 Create model
```
php artisan make:model Order -m
```

### 2 Create controller
```bash
php artisan make:controller OrderController --resource
```

### 3 Make the realation in model :

In the Drink Model
```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Drink extends Model
{
    protected $fillable=[
        "name",
        "code",
        "price"

    ];


    // relation hasmany
    public function orders(){

        return $this->hasMany("App\Order");

    }
}

```


In the Order Model
```php
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    // relation belongsTo
    public  function  drinks() {

        return $this->belongsTo("App\Drink");

    }
}

```


### 4 Update the migration file

In database/migrations/2018_02_09_092254_create_orders_table.php
```php
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_drink')->unsigned();
            $table->string('code_drink');
            $table->integer('sugar')->unsigned();
            $table->integer('price')->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
```


**Note :** $ php artisan make:migration add_user_id_to_orders_table --table=orders

### 5 Make Migrate

```bash
php artisan migrate
```


###
