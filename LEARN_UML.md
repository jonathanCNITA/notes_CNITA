# UML

## Définition (wikipedia)
Le Langage de Modélisation Unifié, de l'anglais Unified Modeling Language (UML), est un langage de modélisation graphique à base de pictogrammes conçu pour fournir une méthode normalisée pour visualiser la conception d'un système. Il est couramment utilisé en développement logiciel et en conception orientée objet.


----


L'uml est une méthode qui permet le découpage d'un logiciel dans une phase en amont de la programmation. Cette méthode permet via des documents graphiques de communiquer avec les différents interlocuteurs du projet. Cette approche est en générale utilisé sur des projet de moyenne à très grosse envergure.

En partant de la définition des 'Uses case' jusqu'à la modélisation des classes et avec les attributs et méthodes, l'uml permet de mettre en place le design d'une application et séparer les différente composantes. Cela permet un travail sur chaque partie de manière autonome pour les équipes tout en restant cohérent pour l'application.

Une fois cette phase de pré programmation établie elle peut permettre selon les logiciels de générer une partie du code (pas l'algo mais l'architecture générale) les classes avec leur fonctions.

# EX cahier des charges
Pour illustrer la mécanique de cette approche nous allons partir du cahier des charge suivant :     
Réalisation d'une caisse informatisée.     

Un commerçant de produits touristiques (souvenirs, livres régionaux, ...) désire informatiser sa caisse. Chaque type de produit possède un code unique (étiquette à code à barres), et un même prix pour tous les produits de ce type. L'objectif est de faciliter la maintenance des prix des articles.     

Chaque type de produit est référencé dans un catalogue, avec son prix associé. Quand le prix d'un produit doit être modifié, le manager modifie son prix dans le catalogue, puis sur l'étagère où il est rangé. Le caissier s'identifie pour démarrer la caisse (avec mot de passe ). La caisse fera les fonctions habituelles d'une caisse : calcul du sous total, calcul du total, possibilité de rentrer plusieurs articles ayant un même code, retour d'une marchandise avec le ticket de caisse. Le paiement se fera en monnaie seulement.      

La caisse permet d'éditer des rapports :     

Le reçu qui sera donné uniquement pour une vente effective. Il contient le nom du magasin, un message de bienvenue, la date et l'heure. Puis pour chaque vente il donne le code du produit, la description du produit, le prix unitaire, la quantité et le sous total. Enfin nous y trouvons le total TTC.     

Le rapport quotidien de l'ensemble des ventes (date, heure, total ).     

Le rapport quotidien détaillé: liste de l'ensemble détaillé des ventes de la journée.     

La caisse s'exécute sur un PC. Une douchette permettra de lire les codes à barres. Les informations peuvent être rentrées au clavier, ou à la souris.     


----


## Liste des diagrammes UML
**1 Diagramme de use case :** on définit les différents usage et acteurs sans se préoccuper de l'intérieur du 'système ' qui est la boite noire, c'est la phase d'inception.     



**2 Diagramme de séquence :** on modélise les différents scénario rattaché à un use case. Représente de manière verticale pour la chronologie.(1 diagramme de séquence pour un use case) il faut aussi retrouver la liste des différentes anomalie qui peuvent être rencontrées. C'est la phase d'analyse.     



**3 Diagramme de classe :** une fois le diagramme de séquence réalisé on peut y associer les différentes classes qu'il va falloir implémenter ainsi que leur attributs. Cette phase permet de donner un premier aperçu concret de l’implémentation du code et du design.     



**4 Diagramme de communication :** cette partie va décrire de manière précise le déroulement d’une action les impactes et les liens avec les autres classes. C'est une phase de design primordiale. Pour nous aider dans les choix de conception on peut (doit) s'aider des GRASP PATTERN.     

----

## GRASP pattern : 
Pour penser notre implémentation du diagramme de communication les GRASP pattern aux nombre de 9 nous permettent de repenser les liens entre les classes et l'architecture afin de rendre l'application plus robuste en laissant les classes le plus indépendantes possible.   

**1- De couplage faible :**

A→B A→C A→D B→C B→D C→D (couplage fort)

A→B→C→D (couplage faible)

**2- Une forte cohésion :**     
On ne mélange pas les torchons et les serviettes, les classes on un lien direct

**3- Créateur :**     
Qui est le plus à même d'instancier cette classe ?     

**4- Indirection :**      
Il est parfois nécessaire de créer une classe 'technique' pour gerer les entrée et les sorties par exemple (cela permet de laisser les classes métier intact et modifier uniquement la classe technique lors de changement ex : changement de système de diffusion

**5- Expert :**      
Ou spécialiste de l'Information , qui connaît le mieux cette classe ? Va souvent de pair avec forte cohésion et créateur.

**6- Polymorphisme :**    

**7- Protégé des variations**

**8- Pure invention**

**9- Contrôleur**

réf : https://fr.wikipedia.org/wiki/GRASP_(programmation)



Note parfois pour une implémentation certain patterns peuvent se contredire il faut alors faire des choix, les grasp pattern ne sont pas des règles d'or mais des outils de 'bon sens qui permettent de nous aider dans nos choix de conception.

----

## Lire un diagramme UML :

Les diagrammes UML utilisent des représentations graphique codifiées afin de garantir une compréhension entre les différents acteurs. Il y'a les modèles d'éléments et les liaisons:

https://fr.wikipedia.org/wiki/UML_(informatique)



Liens :

https://fr.wikiversity.org/wiki/Modélisation_UML: un cours général sur l'uml

https://general.developpez.com/cours/ → search uml

https://laurent-audibert.developpez.com/Cours-UML/?page=introduction-modelisation-objet

https://machow2.com/best-uml-mac/ : liste de soft pour l'ulm

