# Report Human Talk [01]

15/05/2018     
lieu: wizbii - Grenoble     

Programme:     
+ cme: a configuration checker and editor. Dominique Dumont
+ Test unitaires et TDD - Partie 2 : petite démo. Xavier NOPRE
+ Introduction à l'API Stream de Java. Marc Nazarian

---

## Intro
18H53 me voilà donc arrivé sur les lieu de la conférence Human Talk.
Acceulli par un salarié de wizbii avec qui on entame la discution avec un collègue du campus.
Au alentour de 19H00 présentation du principe des human Talk par les organisateurs (Des élèves de la promo 1 du campus).
Présentation avec nos voisins. l'ambiance et détendu nous somme une petite vingtaine.

Concept: 
Dans une ambiance convivial 3 ou 4 talks 10 min sur les thêmes du devellopement informatique, techno, web, language framework etc..
Les talkeur peuvent être des master des nouveaux mais quoi qu'il en soit des gens qui ont envie de partager.

## Talk 1: CME
LE premier talker est Dominique Dumont. Il présente un outils qu'il dévellope depuis une dizaine d'année.
CME un logiciel qui permet d'éditer des fichiers de conf sur linux (debian, ubuntu). 
Il pose la problèmatique qui l'a pousser à produire et maintenir cet outils.
Puis il explique son fonctionnement global, CME propose une version pour le bash, un CLI et une version graphique GUI.
Suite à cela il fait une démo très rapide de l'utilisation du programme.
Le programme à l'air très efficace et accessible, mais je dois avouer ne pas avoir l'utilité et/ou les compétences
pour ce type d'outils. Cela étant je sais maintenat qu'il existe et irais surement voir dans quel contexte 
il peut m'apporter une solution efficace.

## Talk 2: TDD demo
Pour ce deuxième Talk de la soirée, c'est Xavier Nopre qui fait suite au Human Talk précédent TDD théorie, avec
une demo "live coding" du devellopement par les tests. 
Le temps impartie étant très court et ayant expliqué les principes la fois prècedente il en vient très vite au fait.     

Le PO veut une fonction qui calcule le prix avec la tva (differents taux).
Il donne 3 examples de tests à valider avec le prix unitaire la taxe et le résultat attendu.    
En premier lieu il écrit le test (les classes, methodes etc ... n'existe pas encore) Cela lui permet au besoin de modifier 
les noms, bref c'est le test qui conduit l'approche et pose les fondements de la méthode.    
**Le test ne passe pas (c'est l'étape 1 du TDD).** 

En second il ecrit la classe et la méthode de manière bourrin, le but étant de faire passer le test (en toute intelligence) au plus vite.     
**OK le test passe.**    

EN troisième c'est la periode de refactorisation, il renomme ses variables rend le code plus lisible.    
**OK le test passe.**    

Il peut passer au second test. Et ainsi de suite en suivant bien ce système 
1. fail 
2. pass 
3. refactor - pass     

La démo est très courte mais le talker connais parfaitement son sujet et en 10 min fait une belle demontration du TDD.
Il nous fait savoir qu'il à des videos sur son blog sur le sujet.

## Talk 3: L'api stream de java
Pour finir la soirée c'est Marc Nazarian qui nous présente les stream en Java 8.
Il nous présente d'abord son parcours avec notamment son rôle dans la bien connu boite Une petite mousse.
Du coup ses exemples tournent forcement autour de marques de bière, ce qui donne au thème une touche plutôt sympas. 
Le tout dans un contexte de problèmatique très réaliste. 

Il nous présente succintement un historique des versions de Java et commence sur l'api stream avec JAVA 8 en 2014.
Il nous montre un example d'iteration sur une collection avec une boucle de type for() 
qui doit retourner une liste avec uniquement les utilisateurs qui boivent telle marque de bière. 
Puis le même résultat avec un stream de type filter.

Il continue avec un exemple plus complexe avec plusieurs boucles for (code difficilement compréhensible). 
l'équivalent avec quelques filter chainés fait 3, 4 fois moins de ligne de code et est, si on connait le sens de lecture, vraiment plus explicite. 
Il nous présente rapidement quelques autre fonctions comme map.
On retrouve ce type de syntaxe dans javascript depuis ES6 et dans d'autres languages.

## Outro
Voilà les talk sont terminés. J'ai passé un bon moment même si j'ai trouvé cela trop court, 5 10 min de plus par talk serait pas ma. 
Néanmoins je pense que le format est là pour donner une culture générale, une idée. Du coup c'est un rendez a suivre au moins de temps en temps pour découvrir des choses entendu de loin ou en découvrir de toute nouvelles. 
Pour finir Un petit apéro est proposé avec pizza et bière (apparement un classique chez les dev)...

A refaire.

Jonathan Courat.

---

### links:
[human talk 15/05/18](https://humantalks.com/cities/grenoble/events/415)     
[talk 1 - CME](https://humantalks.com/talks/1214-cme-a-configuration-checker-and-editor)     
[talk 2 - TDD](https://humantalks.com/talks/1215-test-unitaires-et-tdd-partie-2-petite-demo)    
[talk 3 - API STREAM JAVA](https://humantalks.com/talks/1217-introduction-a-l-api-stream-de-java)