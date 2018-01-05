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
```
SELECT name FROM drinks;
```  

### Liste des ingrédients en manque (dont la quantité est nulle) 
```
SELECT name FROM ingredients
WHERE quantity = 0;
``` 

### Liste des boissons dont le libellé contient le mot « café » 
```
SELECT name FROM drinks
WHERE name LIKE '%expresso%';
```

###  Liste des boissons dont le prix est entre 0.40 et 0.70 euros 
```
SELECT name FROM drinks
WHERE price BETWEEN 40 AND 70;
```

###  Liste des ventes d’aujourd’hui classées par n° décroissant 
```
SELECT * FROM sales
WHERE DATE_FORMAT(`date`,'%Y-%m-%d') = '2018-01-04'
ORDER BY date DESC;
```


```
SELECT * FROM sales
WHERE DATE(date) = CURRENT_DATE
ORDER BY date DESC;
```

###  Liste des ingrédients (nom et qte nécesssaire) d’une boisson donnée
```
SELECT name, recipeqty
FROM recipes
INNER JOIN ingredients
ON recipes.ingredients_id=ingredients.id
WHERE drinks_code = 'exp';
```

```
SELECT recipeqty, drinks.name
from recipes
INNER JOIN drinks ON recipes.drinks_code = drinks.code
INNER JOIN ingredients ON recipes.ingredients_id = ingredients.id
WHERE drinks.name = "expresso";
```

### Liste des boissons disponibles (pour lesquelles les ingrédients sont dispo) PAS FINI !!!!!!
```
SELECT drinks.name, ingredients.name, recipes.recipeqty < ingredients.quantity AS 'dispo' FROM drinks
JOIN recipes ON recipes.drinks_code = drinks.code
JOIN ingredients ON recipes.ingredients_id = ingredients.id
```

### Liste des boissons vendues aujourd’hui 
```
SELECT name FROM drinks
INNER JOIN sales
ON drinks.code = sales.drink_code
WHERE drinks.code IN (SELECT drinks_code FROM sales
WHERE DATE_FORMAT(date,'%Y-%m-%d') = '2018-01-04'); 
```

```
SELECT name FROM drinks
INNER JOIN sales
ON sales.drinks_code = drinks.code
WHERE DATE_FORMAT(date,'%Y-%m-%d') = '2018-01-04';
```

###  Prix de la derniere boisson vendue 
First step    
```
SELECT * FROM sales 
WHERE date = (SELECT MAX(date) FROM sales)
```
TO
```
SELECT name, price FROM drinks
INNER JOIN sales
ON sales.drinks_code = drinks.code
WHERE date = (SELECT MAX(date) FROM sales);
```

### Nombre de ventes de la boisson « CaféLong »
```
SELECT COUNT(*) FROM sales
WHERE drinks_code = "dbl";
```

### Rajouter la boisson « Café au lait » 
```
INSERT INTO drinks (code, name, price)
VALUES ('lat', 'latte', '90');
```

### Rajouter 100 à la quantité en stock de l’ingrédient « sucre » 
```
UPDATE ingredients SET quantity = quantity + 100
WHERE ingredients.id = 6 ;
```

###  Augmenter de 0.10 euros le prix de toutes les boissons
```
UPDATE drinks SET price = price + 10;
```

### Créer une nouvelle vente d’expresso avec 2 sucres
```
INSERT INTO sales (drinks_code, ingredients_id, id, sugar, date) 
VALUES ('exp', 6, NULL, 2, '2018-01-05 11:25:00');
```

###  Supprimer cette vente
```
DELETE FROM sales 
WHERE sales.drinks_code = 'exp' 
AND sales.ingredients_id = 6 
AND sales.id = 7;
```


