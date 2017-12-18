# LEARN PHP


## Search  MySQL definition
MySQL
MySQL (prononcer [maj.ɛs.ky.ɛl]) est un système de gestion de bases de données relationnelles (SGBDR - Système de Gestion de Bases de Données Relationnelles)

Son nom vient du prénom de la fille du cocréateur Michael Widenius, My. SQL (Structured Query Language) fait référence au Structured Query Language, le langage de requête utilisé.

En informatique, une base de données relationnelle est une base de données où l'information est organisée dans des tableaux à deux dimensions appelés des relations ou tables1, selon le modèle introduit par Edgar F. Codd en 1970. Selon ce modèle relationnel, une base de données consiste en une ou plusieurs relations. Les lignes de ces relations sont appelées des nuplets ou enregistrements. Les colonnes sont appelées des attributs.

**Alternative A mySQL**
MariaDB
PostgreSQL
Ingres Database
SQLite

## WAMP definition:
Windows Apache MySQL PHP    

**Windows** assure l'attribution des ressources à ces trois composants;
**Apache** est le serveur web « frontal » : il est « devant » tous les autres et répond directement aux requêtes du client web (navigateur);
**MySQL** stocke toutes les données de l'application - c'est le système de gestion de bases de données relationnelles;
**PHP** Le langage de script qui sert la logique.

## PHP base

PHP code are in this balises
```php
<?php /* PHP code here */ ?>
```

Insert some text in a HTML page with `echo`
```php
<?php 
	echo "Ceci est du texte"; 
?>
```

OR use `print` 
```php
<?php 
	print "Ceci est du texte"; 
?>
```

### Concatenation strings
Concat String like `"blabla " + "sju jlksoi"` use the dot `.`
```php
<?php
	echo "blabla "."sju jlksoi";
?>
```

### Mathematical operations
```php
<?php
  echo 5 * 7;
?>
```

### Variables

```php
<?php
$myVariable = "John";
$anOtherVariable = 35;

echo $myVariable;
?>
```

### Comments

```php
<?php
	echo "this is a comment under this line";
	// this line is commented
?>
```

## Condition and control flux

Simple condition example:
```php
<?php 
   $age = 19; 

   if ($age > 17) {
     echo "Vous pouvez conduire !"; 
   } 
?> 
```

```php
<?php 
   $age = 19;

   if ($age > 17) {
   	echo "Vous pouvez conduire !"; 
   } else {
   	echo "vous ne pouvez pas conduire !";
   }
?> 
```

```php
<?php 
   $age = 35;

   if ($age < 18) {
   	echo "don't drink"; 
   } elseif ($age < 30 ) {
   	echo "enjoy";
   } else {
   	echo "hehe";
   }
?> 
```

## Switch statement
Basic switch case
```
<?php
    $i = 2;
    
    switch ($i) {
        case 0:
            echo '$i est égal à 0.';
            break;
        case 1:
         	echo '$i est égal à 1.';
            break;
        case 2:
        	echo '$i est égal à 2.';
            break;
        default:
            echo "Je ne connais pas la valeur de \$i.";
    }
?>

```


The same with syntaxique sugar:
```
<?php
    $i = 2;
    
    switch ($i):
        case 0:
            echo '$i est égal à 0.';
            break;
        case 1:
         	echo '$i est égal à 1.';
            break;
        case 2:
        	echo '$i est égal à 2.';
            break;
        default:
            echo "Je ne connais pas la valeur de \$i.";
    endswitch;
?>

```

switch tricks:
```
<?php
    $i = 5;
    
    switch ($i) {
        case 0:
            echo '$i est égal à 0.';
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            echo '$i est entre 1 et 5.';
            break;
        case 6:
        case 7:
            echo '$i est entre 6 et 7.';
            break;
        default:
            echo "Je ne connais pas la valeur de \$i.";
    }
    ?>
```


## Arrays

Array in PHP:
```
<?php
	$myArray = array("Oeuf", "Tomate", "Haricot", "Chips", "Saucisse");
?>
```

Access to a value:
```
<?php
	$myArray = array("Javascript", "PHP", "Python", "Go");
	echo $myArray[2];
	// should print like Python
	print $myArray[2];
?>
```

Delete a specific value with `unset`:
```
<?php 
   $tableau = array("rouge", "bleu", "vert"); 
   unset($tableau[2]); 
?>
```

Delete an array:
```
unset($tableau); 
```

Loop over an array:
```
<?php
        $langages = array("HTML/CSS", "JavaScript", "PHP", "Python", "Ruby");
        supprimer Python du tableau !
        unset($langages[3]);
        
        foreach($langages as $lang) {
          print "<p>$lang</p>";
        }
      ?>
```

Push element in an array with `array_push($arrayName, "valueToPush"` :
```
<?php
	$myArray = array ();
	array_push($myArray, "red");
	array_push($myArray, "blue");
	array_push($myArray, "green");
?>
```

Get the array size with `count($array)` :
```
<php
	$myArray = array("elem0", "elem1", "elem2");
	print count($myArray);
?>
```

## LOOPS

### for foreach

The for loop:
```
<?php
    // Print the 5 even numbers
    for  ($i = 2; $i < 11; $i = $i + 2) {
    	echo $i." ";
    }
?>
```

The `foreach`
```
<?php
	$langs = array("JavaScript", "HTML/CSS", "PHP", "Python", "Ruby");
	foreach ($langs as $lang) {
		echo "<li>$lang</li>";
	}
?>
```

### while

Classic version:
```
<?php
	$conditionBoucle = true;

	while ($conditionBoucle === true) {
		// Affichez un message indiquant que la boucle fonctionne
		echo "<p>La boucle fonctionne.</p>";
		$conditionBoucle = false;
	}
?>
```

Version with the syntaxique sugar:
```
<?php
	$conditionBoucle = true;

	while ($conditionBoucle === true) :
		// Affichez un message indiquant que la boucle fonctionne
		echo "<p>La boucle fonctionne.</p>";
		$conditionBoucle = false;
	endwhile;
?>
```

### The do while:

```
<?php
	$i = 0;
	do {
	    echo $i;
	} while ($i > 0);
?>
```


## Functions

### Built in functions

#### strings functions

Get the length of a string with `strlen("word")` :
```
<?php
	$lengthWord = strlen("John Doe");
	echo $lengthWord
?>
```


splice a string with `substr("word word2")` :
```
<?php
	$phrase = "this is a phrase";
	$verb = substr($phrase, 5, 7);
	print $verb;
?>
```

Set uppercase `strtoupper()` / lowercase `strtolower()` :
```
<?php
	$name = "john";
	$name = strtoupper($name);
	print "My name is ".$name;

	$name = strtolower($name);
	print "My name is ".$name;
?>
```

Find the first match case with `strpos("word", "or")` :
```
<?php
	$pos=strpos("emily", "e"); // $pos vaut 0 
	$pos=strpos("emily", "i"); // $pos vaut 2 
	$pos=strpos("emily", "ily"); // $pos vaut 2 
	$pos=strpos("emily" "zxc"); // $Pos vaut false 
?>
```

#### mathematical functions

The round():
```
<?php
	// round PI number
	$result = round(M_PI); 
	print $result; // -> 3

	// Get Pi with 4 décimals 
	$result = round (M_PI, 4); 
	print $result; // -> 3,1416 
?>
```

The random number with `rand()` :
```
<?php
//without limits yana
print rand (); 

// between 1 & 10 
print rand (1,10); 
?>
```

#### Array functions

Push element in an array with `array_push($arrayName, "valueToPush"` :
```
<?php
	$myArray = array ();
	array_push($myArray, "red");
	array_push($myArray, "blue");
	array_push($myArray, "green");
?>
```

Get the array size with `count($array)` :
```
<php
	$myArray = array("elem0", "elem1", "elem2");
	print count($myArray);
?>
```

Sort an array with `sort(array)`(return true if OK else ..... false):
```
<?php
	$myNums = array(23, 7,18,17);
    sort($myNums);
    foreach($myNums as $num) {
        print "<p>$num</p>";   
    }	
?>
```


Sort an reversed array with `rsort($array)` (return true if OK else ..... false):
```
<?php
	$myNums = array(23, 7,18,17);
  rsort($myNums);
  foreach($myNums as $num) {
    print "<p>$num</p>";   
  }	
?>
```

Join the elements of an array () with `join($mArray)` :
```
<?php
	$myNums = array("my", "name", "is", "John");
	print join(", ", $myNums);
?>
```

### Write your own functions

It work like other functions:
```
<?php
  function addTen( $num ) {
    return $num + 10;
  }

  addTen(8);
  // -> 18
?>

```