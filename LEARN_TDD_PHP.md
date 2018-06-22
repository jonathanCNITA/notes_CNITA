
##Links
[The Practical Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)

## Keywords
jenkins
Fitnesse
Selenium
---
Test lisible
Given / When / Then
Fixtures ???
Factories ???
mixin

## Les différents types de tests
......#......  **ui tests** ->lents ->chers
.....###.....
....#####....
...#######...  **Service tests**
..#########..
.###########.
#############  **Unit tests** ->rapide ->peu couteux 

+ **Test unitaire:** tests des méthodes et fonctions du programme (petit morceaux, code qui test du code)
+ **Services tests:** test fonctionnels (acces à une api réponse d'une page http ...)
+ **UI tests:** Test User interface, test d'une application avec son interface graphique.

##Lancer les tests

[Doc PHPUNIT](https://phpunit.de/getting-started/phpunit-7.html)

Exemple pour laravel
```bash
./vendor/bin/phpunit --bootstrap vendor/autoload.php tests/Unit/fichierDeTests.php
```

## LES TESTS UNITAIRES

Les tests unitaires sont réalisée sur de petites partie de code (methode) 

###les tests des methodes
On ecrit d'abord le test dans le fichier de tests (test > Unit > DonationFeeTest.php).     
La méthode la plus courante est celle qui vérifie l'égalité d'un résultat `assertEquals`
Qui prend en paramètre le résultat attendu, puis le résultat donné)
```php
<?php

namespace Tests\Unit;

use App\DonationFee;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
//use Mockery\Exception;

class DonationFeeTest extends TestCase
{
	/**
     * Test de la commission prélevée par le site.
     *
     * @throws \Exception
     */

    public function testCommissionAmountGetter()
    {
    	// Given
    	$donationFees = new DonationFee(100, 10);
    	// When
    	$actual = $donationFees->getCommissionAmount();
    	// Then
    	 $expected = 10;
        $this->assertEquals($expected, $actual);
    }
}
```

Puis dans le fihier de la classe on ecris la methode
```php
<?php
namespace App;


class DonationFee
{
	private $donation;
    private $commissionPercentage;
    private const FIXED_FEE = 50; 

    public function __construct($donation, $commissionPercentage)
    {
        $this->donation = $donation;
        $this->commissionPercentage = $commissionPercentage;
    }

    public function getCommissionAmount()
    {
        return ($this->donation * $this->commissionPercentage) / 100;
    }

}
```

###Les tests d'exceptions 
Pour gérer les exceptions on donne en premier l'exeption attendu.
Puis on met le code en route.
Ici on test que la commission ne dépasse pas 30%

DonationFee.php
```php
<?php
namespace App;

class DonationFee
{

    private $donation;
    private $commissionPercentage;

    public function __construct($donation, $commissionPercentage)
    {
        if ($commissionPercentage > 30) {
            throw new \Exception("commission Percentage out of bound");
        }

        $this->donation = $donation;
        $this->commissionPercentage = $commissionPercentage;
    }
}
```

**Le fichier de tests**   
```php
<?php

namespace Tests\Unit;

use App\DonationFee;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class DonationFeeTest extends TestCase
{
    /**
     * Test de la commission prélevée par le site.
     *
     * @throws \Exception
     */

    public function testCommissionPercentValue()
    {
        $this->expectException(\Exception::class);
        $donationFees = new DonationFee(100, 50);
    }
}

```

[Les différents types d'exceptions](https://phpunit.de/manual/6.5/en/writing-tests-for-phpunit.html)


---


##LES TESTS FONCTIONNELS (Service tests)

Les tests fonctionels regroupent des tests sur des fonctionalitées plus larges.
Les réponses des requêtes HTTP le contenu d'une page etc.

Example:     
Dans le fichier de tests : tests/Feature/ProjectTest.php
```php
<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProjectTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $response = $this->get('/projects');
        $response->assertStatus(200);
    }

    public function testPresenceOfH1InProjects()
    {
        $response = $this->get('/projects');
        $toSearch = "<h1>Liste des projets</h1>";
        $response->assertSee($toSearch);
    }

}
```

Dans la view projects.blade.php resource:views/projects.blade.php
```php
<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="flex-center position-ref full-height">
           <h1>Liste des projets</h1>
        </div>
    </body>
</html>

```

## Tests avec Faker et Factory

Une factory est une forme d'instanciation, cela permet de créer à la volée une instance      
avec des paramètres prédéfinits pour par example réaliser des tests.

### Mise en place de la Factory ProjectFactory

1. Creer une factory avec le model Project:
```bash
php artisan make:factory ProjectFactory --model=Project
```
On retrouve le fichier dans database/factories
On utilise ici faker qui permet de rentrée des random data.

2. Dans le fichier database/factories/ProjectFactory.php
```php
<?php

use Faker\Generator as Faker;

$factory->define(App\Project::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(),
        'resume' => $faker->sentence(3),
        'imageurl' => 'https://images.unsplash.com/photo-1519458246479',
        'content' => implode($faker->paragraphs(5)),
        'created_at' => \Carbon\Carbon::now(),
        'updated_at' => \Carbon\Carbon::now()
    ];
});
```

### Utilisation de la factory dans un test in Memory

```php
<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProjectTest extends TestCase
{
    // /!\ Ne pas oublier cette ligne /!\
    use \Illuminate\Foundation\Testing\DatabaseMigrations;
    /**
     * A basic test example.
     *
     * @return void
     */
   
    public function testPresenceOfH2InProjects()
    {
        // On crée 100 seule instance du model Project
        // puis on en selectionne une seule
        $project = factory(\App\Project::class, 100)->create()->random();
        $response = $this->get('/projects');
        $toSearch = '<h2>' . $project->title . '</h2>';
        $response->assertSee($toSearch);
    }


    public function testPresenceOfH1InProjectFactory()
    {
        // On crée une seule instance du model Project
        $project = factory(\App\Project::class)->create();
        $response = $this->get('/project/show/'. $project->id);
        $toSearch = '<h1>' . $project->title . '</h1>';
        $response->assertSee($toSearch);
    }

}
```


## Creer un model pour projet avec faker et seeder

[How to use faker](https://www.youtube.com/watch?v=ZbGqDqiWYQ8)

### 1 - Generate a Model
We need to generate a model for **project** (`-m` is for generate migration file)
If it's not done before.
```bash
php artisan make:model Project -m
```

### 2- Update the Migration file
update the migration file should look like this:
```php
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
            $table->string('auth')->default('user');
            $table->string('title');
            $table->string('resume');
            $table->text('content');
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
        Schema::dropIfExists('projects');
    }
}

```
Then Make the migration:
```bash
php artisan migrate
```
### 3- Make a Seeder
Make a seeder for your table:
```bash
php artisan make:seeder ProjectsTableSeeder
```
### 4- Add Faker to the seeder file
[Tuto faker](https://medium.com/@ismaeltoe/utiliser-faker-pour-g%C3%A9n%C3%A9rer-des-donn%C3%A9es-de-test-dans-laravel-cb0ebe142955)

database/seed/ProjectsTableSeeder
```php
<?php

use Illuminate\Database\Seeder;
Use Faker\Factory as Faker;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create('App\Project');

        for($i = 1; $i < 10; $i++){
            DB::table('projects')->insert([
                'title' => $faker->sentence(),
                'resume' => $faker->sentence(3),
                'content' => implode($faker->paragraphs(5)),
                'created_at' => \Carbon\Carbon::now(),
                'updated_at' => \Carbon\Carbon::now()
            ]);
        } 
    }
}
```

### 5-Make migration 
```bas
hphp artisan db:seed --class=ProjectsTableSeeder
```


## Auth

```bash
php artisan make:policy ProjectPolicy --model=Project
```