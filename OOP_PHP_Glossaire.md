# PROGRAMMATION OBJET EN PHP

[PHP Object Oriented programming cheat sheet](http://www.logicbig.com/tutorials/misc/php/php-oop-cheat-sheet/)
[the PHP sand box](http://sandbox.onlinephpfunctions.com/)
[Un lien interréssant](http://www.pierre-giraud.com/php-mysql/cours-complet/php-poo-chainage-methodes.php)
## Glossaire

**Class**
 : la class et une sorte de plan avec des attributs et des methodes qui une fois instancier crée

> Une classe peut contenir ses propres constantes, variables (appelées "propriétés" ou "attributs"), et fonctions (appelées "méthodes"). 

**Method** : Les methodes sont les fonctions d'une class.

**Attribut** : Les attributs sont les variables d'une class.

**Héritage**:  on parle d'héritage lorqu'une classe dépend d'une classe mère, elle "hérite" des attributs et méthode de la classe mère.

**Chaînage**

**Collection d’objets**

**Paradigme**

**Instance de classe**: Un objet est une instance d'une class

**public / private / protected** Sont des mots clé qui définnissent dans quel espaces ils sont accessible et ou modifiable.

***

EXEMPLES :
--------------------------

**class**: est une sorte de plan qui contient des attributs et des methodes. Elle sert de modele pour créer des objets.

**Extends** : Mot clé pour faire d'une classe l'héritière d'une autre (notament ses fonctions et attributs)
```php
<?php
class Shape {
	public $hasSides = true;
}

class Square extends Shape {

}

$square = new Square();
if (property_exists($square, 'hasSides') ) {
	echo "J'ai des côtés !";
}
?>
```


**is_a()** : Vérifie si l'objet object est une instance d'une classe donnée ou a cette classe comme parent.
```php
class Perso
{
	protected $name = 'Michel';
	private $age = 20;
	public $city = 'London';
}

class Test 
{

}

$me = new Perso();
$we = new Test();

var_dump(is_a($me, 'Perso'));
// → true | $me est bien une instance de Perso

var_dump(is_a($we, 'Perso'));
// → false | $we n'est pas une instance de Perso mais de Test
```


**property_exists()** : Vérifie si un objet ou une classe possède une propriété 
```php
class Perso
{
	protected $name = 'Michel';
	private $age = 20;
	public $city = 'London';

	public function addYears($years) {
		$this->age += $years;
	}
}

var_dump(property_exists('Perso', 'name'));
// → true

var_dump(property_exists('Perso', 'recipe'));
// → false

var_dump(property_exists('Perso', 'addYears'));
// → true
```

**method_exists()**


**final** : permet de ne pas ecrase une fonction / variable(?) depuis une classe fille.


**public** : la variables est accessible et muttable partout dans le code
```php
<?php

class Perso
{
	protected $name = 'Michel';
	private $age = 20;
	public $city = 'London';
}

$me = new Perso();

echo $me->city;
// → London

$me->city = 'Tokyo';
echo $me->city;
// → Tokyo
```


**private** la variable à une portée qui se limite à la classe, elle n'est pas accessible de l'exterieur, une classe fille ne peut pas l'écraser
```php
<?php

class Perso
{
	protected $name = 'Michel';
	private $age = 20;
	public $city = 'London';
}

$me = new Perso();

echo $me->age;
// → Fatal error
```


**protected** la variable à une portée qui se limite à la classe, elle n'est pas accessible de l'exterieur, une classe fille peu l'écraser
```php
<?php
class Perso
{
	protected $name = 'Michel';
	private $age = 20;
	public $city = 'London';
}
```


**construct** il sagit du constructeur qui est appelé lors de l'instanciation de la classe : 
```php
<?php
class Perso
{
	protected $name = 'Default';
	private $age = 20;
	public $city = 'London';

	function __construct($name) {
              $this->name = $name;
	}
}

```


**const et ::** `const` permet de creer une constante: une variable qui n'est pas modifiable. Pour acceder à cette variable sans instancier un objet on utilise la notation `::`
```php
 <?php
      class Person {
          
      }

      class Ninja extends Person {
        const stealth = "MAXIMUM";
      }

      echo Ninja::stealth;
?>
```


**static & ::** `static` permet d'appeler une methode via `::` 
```php
<?php
class King {
	public static function proclaim() {
		echo "A kingly proclamation!";
	}
}
echo King::proclaim();
?>
```


**$this**

**$maVariable** `$_maVariable` est une convention pour spécifier que la variable est privée.

**abstract**

**protected static**


**self** fait référence à self.
