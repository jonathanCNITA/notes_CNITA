
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

##LES TESTS FONCTIONNELS (Service tests)


