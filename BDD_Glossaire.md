# GLOSSAIRE BDD


## Glossaire

### Base De Donnée: 
Une base de données est un « conteneur » stockant des données2 telles que des chiffres, des dates ou des mots, pouvant être retraités par des moyens informatiques pour produire une information ; par exemple, des chiffres et des noms assemblés et triés pour former un annuaire.

### SGBD:
un système de gestion de base de données (abr. SGBD) est un logiciel système destiné à stocker et à partager des informations dans une base de données, en garantissant la qualité, la pérennité et la confidentialité des informations, tout en cachant la complexité des opérations.

Quelques SGBD(R) : MySQL, SQLite, MariaDB, PostGreSQL, Oracle

### Table:
Dans les bases de données relationnelles, une table est un ensemble de données organisées sous forme d'un tableau où les colonnes correspondent à des **catégories ( ou attributs)** d'information (une colonne peut stocker des numéros de téléphone, une autre des noms...) et les **lignes à des enregistrements**, également appelés entrées.


Entité de la Table: Nom de la table ???? 


### Attributs:
Un attribut est une caractéristique d'une entité susceptible d'être enregistrée dans la base de données. Par exemple, une personne (entité), son nom et son adresse (des attributs). Les attributs sont également appelés des champs ou des colonnes4. Dans le schéma les entités sont décrites comme un lot d'attributs en rapport avec un sujet

### Clé Primaire (Primary key):
Dans les modèles de données relationnels, la clé primaire est un attribut dont le contenu est différent pour chaque enregistrement de la table, ce qui permet de retrouver un et un seul enregistrement

### Clé étrangère (Foreign key):
Dans les modèles de données relationnels, une clé étrangère est un attribut qui contient une référence à une donnée connexe - dans les faits la valeur de la clé primaire de la donnée connexe

### Requete SQL:
SQL (sigle de Structured Query Language, en français langage de requête structurée) est un langage informatique normalisé servant à exploiter des bases de données relationnelles. La partie langage de manipulation des données de SQL permet de rechercher, d'ajouter, de modifier ou de supprimer des données dans les bases de données relationnelles.

### Cardinalité:
La cardinalité d'une association - d'un lien entre deux entités A et B - est le nombre de A pour lesquelles il existe un B et inversement. Celle-ci peut être un-a-un, un-a-plusieurs ou plusieurs-à-plusieurs. Par exemple, un compte bancaire appartient à un seul client, et un client peut avoir plusieurs comptes bancaires (cardinalité un-a-plusieurs)

### CRUD:
L'acronyme informatique anglais CRUD (pour create, read, update, delete) (parfois appelé SCRUD avec un "S" pour search) désigne les quatre opérations de base pour la persistance des données, en particulier le stockage d'informations en base de données.


### Relation:
Une relation est un lien entre deux tables, associant des données de la première avec celles de la deuxième.    
Trois situations sont possibles :     
+ les relations peuvent s'établir d'un enregistrement à un seul autre (1 à 1);
+ d'un enregistrement à plusieurs autres (1 à wpe8.gif (866 octets) );
+ de plusieurs enregistrements à plusieurs autres (de wpe9.gif (866 octets) à  wpeA.gif (866 octets) ). 

## C'est quoi:
Une base de donnée contient X tables     
Chaque table à un nom unique elle contienne les datas.     
Une Table est constitué de colones (attribut : nom de la colone) qui est typé INT, VARCHAR, BOOL, DATE...      
Une Table peut contenir une **PRIMARY KEY** mais plusieurs **FOREIGN KEY**
example:
********************* 
**TableName :** info
*********************
id|Nom |age|mail
--|----|---|----
1 |jojo|36|jojo@mail.com
2 |toto|34|toto@mail.com


## Schema 

![schema BDD](https://sgbd.developpez.com/tutoriels/cours-complet-bdd-sql/images/image-3.png "schema BDD")
![schema table](https://cacoo.com/assets/site/img/templates/inner/img_database3.png )


USER -> SERVEUR -> php -> requete SQL -> SGBD -> DATABASE -> TABLE

-> PHP -> HTML-> USER


## Example SQL:


```
SELECT Nom From info;
WHERE Nom LIKE ('jo%');
```

SELECT
SELECT DISTINCT
WHERE
AND OR NOT
ORDER BY
INSERT INTO
NULL VALUE
