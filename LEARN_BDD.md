# LEARN BDD

+ Keywords

## Glossaire



## LINKS 

[ebook SGBDR](http://enseignement.alexandre-mesle.com/sql/sql001.html)    
[w3School](https://www.w3schools.com/sql/default.asp)    
[sql.sh](http://sql.sh/)

`ORDER BY column COLLATE utf8_general_ci / utf8mb4`

## KEYWORDS

**CRUD** Create Read Update Delete

### SQL
* **SELECT** - extracts data from a database
* **UPDATE** - updates data in a database
* **DELETE** - deletes data from a database
* **INSERT INTO** - inserts new data into a database
* **CREATE DATABASE** - creates a new database
* **ALTER DATABASE** - modifies a database
* **CREATE TABLE** - creates a new table
* **ALTER TABLE** - modifies a table
* **DROP TABLE** - deletes a table
* **CREATE INDEX** - creates an index (search key)
* **DROP INDEX** - deletes an index

## mySql Workbench

[MySQL Workbench](https://www.mysql.com/fr/products/workbench/) is a software that help you to create DB models.    
A good intro in [video](https://www.youtube.com/watch?v=jaQGNDqXHxc).  


## SQL example


### liste des boissons:
```sql
SELECT name FROM drinks;
```  

### Liste des ingrédients en manque (dont la quantité est nulle) 
```sql
SELECT name FROM ingredients
WHERE quantity = 0;
``` 

### Liste des boissons dont le libellé contient le mot « café » 
```sql
SELECT name FROM drinks
WHERE name LIKE '%expresso%';
```

###  Liste des boissons dont le prix est entre 0.40 et 0.70 euros 
```sql
SELECT name FROM drinks
WHERE price BETWEEN 40 AND 70;
```

###  Liste des ventes d’aujourd’hui classées par n° décroissant 
```sql
SELECT * FROM sales
WHERE DATE_FORMAT(`date`,'%Y-%m-%d') = CURRENT_DATE
ORDER BY date DESC;
```


```sql
SELECT * FROM sales
WHERE DATE(date) = CURRENT_DATE
ORDER BY date DESC;
```

###  Liste des ingrédients (nom et qte nécesssaire) d’une boisson donnée
```sql
SELECT name, recipeqty
FROM recipes
INNER JOIN ingredients
ON recipes.ingredients_id=ingredients.id
WHERE drinks_code = 'exp';
```

```sql
SELECT recipeqty, drinks.name
from recipes
INNER JOIN drinks ON recipes.drinks_code = drinks.code
INNER JOIN ingredients ON recipes.ingredients_id = ingredients.id
WHERE drinks.name = "expresso";
```

### Liste des boissons disponibles (pour lesquelles les ingrédients sont dispo) PAS FINI !!!!!!
```sql
SELECT drinks.name, ingredients.name, recipes.recipeqty < ingredients.quantity AS 'dispo' FROM drinks
JOIN recipes ON recipes.drinks_code = drinks.code
JOIN ingredients ON recipes.ingredients_id = ingredients.id
```

SOLUTION 1
```
SELECT drinks.name FROM drinks
WHERE drinks.name NOT IN (SELECT drinks.name FROM drinks
INNER JOIN recipes
ON code = drinks_code
INNER JOIN ingredients
ON id = ingredients_id
WHERE quantity = 0);
```

SOLUTION 2
```
SELECT drinks.name FROM drinks, recipe, ingredients
WHERE code = drink.code AND etc...
INNER JOIN recipes
ON code = drinks_code
INNER JOIN ingredients
ON id = ingredients_id
WHERE quantity = 0);
```

### Liste des boissons vendues aujourd’hui 
```sql
SELECT name FROM drinks
INNER JOIN sales
ON drinks.code = sales.drink_code
WHERE drinks.code IN (SELECT drinks_code FROM sales
WHERE DATE_FORMAT(date,'%Y-%m-%d') = '2018-01-04'); 
```

```sql
SELECT name FROM drinks
INNER JOIN sales
ON sales.drinks_code = drinks.code
WHERE DATE_FORMAT(date,'%Y-%m-%d') = '2018-01-04';
```

###  Prix de la derniere boisson vendue 
First step    
```sql
SELECT * FROM sales 
WHERE date = (SELECT MAX(date) FROM sales)
```
TO
```sql
SELECT name, price FROM drinks
INNER JOIN sales
ON sales.drinks_code = drinks.code
WHERE date = (SELECT MAX(date) FROM sales);
```

### Nombre de ventes de la boisson « CaféLong »
```sql
SELECT COUNT(*) FROM sales
WHERE drinks_code = "dbl";
```

### Rajouter la boisson « Café au lait » 
```sql
INSERT INTO drinks (code, name, price)
VALUES ('lat', 'latte', '90');
```

### Rajouter 100 à la quantité en stock de l’ingrédient « sucre » 
```sql
UPDATE ingredients SET quantity = quantity + 100
WHERE ingredients.id = 6 ;
```

###  Augmenter de 0.10 euros le prix de toutes les boissons
```sql
UPDATE drinks SET price = price + 10;
```

### Créer une nouvelle vente d’expresso avec 2 sucres
```sql
INSERT INTO sales (drinks_code, id, sugar, date) 
VALUES ('exp', NULL, 2, '2018-01-05 11:25:00');
```

###  Supprimer cette vente
```sql
DELETE FROM sales 
WHERE sales.drinks_code = 'exp' 
AND sales.ingredients_id = 6 
AND sales.id = 7;
```


## SQL - PHP - PDO
1. Verif in **wamp** PHP > extention PHP > PHP_PDO_mySQL
2. Create a pagename.php
3. Connect to the DB
4. Make a Query with SQL
5. fetch the query



```php
<?php
// Step 3
try {
	$bdd = new PDO('mysql:host=localhost;dbname=coffee_machine;charset=utf8', 'root', '');
} catch(Exeption $e) {
	die('Error: '. $e->getMessage());
}
// Step 4
$reponse = $bdd->query('SELECT name, code FROM drinks');
?>

<!DOCTYPE html>
<html>
<head>
	<title>test_sql</title>
</head>
<body>
	<h1>TEST SQL PHP WITH PDO</h1>
	<?php 
		// Step 5
		while($data = $reponse->fetch()) {
			print '<p>' .$data['name'] .' with the code : '. $data['code'] .'</p>'; 
		}
	?>
</body>
</html>
```


Access to DB :
```
$bdd = new PDO('mysql:host=localhost;dbname=coffee_machine;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => ERRMODE_EXEPTION));
```

1- Make a query Solution with query
```php
$reponse = $bdd->query('SELECT name, code FROM drinks');
```

2- Make a query Solution with prepare / execute (more secure and use it with where statement)
```php
$reponse = $bdd->prepare('SELECT name, code FROM drinks');
$reponse->execute();

// WARNING !!! End your query with :
$reponse->closeCursor();
```

### Fetch & co

Voir [pdostatement::fetch](http://php.net/manual/fr/pdostatement.fetch.php)

#### fetch() :
Get row by row on each call.
```
$result = $reponse->fetch();
print_r($result);
$result = $reponse->fetch();
print_r($result);
```

#### fetchAll() :
Get all rows on a call
```
$result = $reponse->fetchAll();
print_r($result);
```

#### fetchColumn()
Get the value of a column :
```
while ($result = $reponse->fetchColumn()) {
	print("$result\n");
}
```