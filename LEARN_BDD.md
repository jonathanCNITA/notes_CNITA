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

###  Liste des ingrédients (nom et qte nécesssaire) d’une boisson donnée
```
SELECT name, recipeqty
FROM recipes
INNER JOIN ingredients
ON recipes.ingredients_id=ingredients.id
WHERE drinks_code = 'exp';
```


### Liste des boissons disponibles (pour lesquelles les ingrédients sont dispos
```
SELECT name FROM
```