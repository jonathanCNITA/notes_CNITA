# LEARN GIT

Git est un logiciel de versionning. il permet de garder une trace de son travail sous la forme d'un arbre.     
On peut creer des branches puis mes fusionner. C'est un outils qui permet le travail en groupe.     
Pour centraliser le code on peut utiliser des plateformes comme Github.


## links

[Git main site](https://git-scm.com/)

[resolving-a-merge-conflict](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/])


## Git command

1. On télécharge d'abord git sur le site principal [Git](https://git-scm.com/)
2. On procede à l'installation
3. Sur windows il estrecommendé d'utiliser git bash.
4. `git --version` dans le terminal pour vérifier que l'installation c'est déroulé correctement

### Mettre en place son mail et nom utilisateur dans git
```bash
Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

```

### Initialiser git

Aller dans le dossier du projet  

**Initialiser git localement**
`git init`

**Commencer depuis un repo distant : gitHub par ex**
`git clone https://github.com/adresse/du/repo`

---
### Commandes principales

**Voir l'état de nos fichiers( Use it frequently )**
`git status`

**Ajouter un fichier (staging area)**
`git add filename.ext`

**Ajouter plusieurs fichiers avec la même extension**
`git add '*.txt'`

**Ajouter plusieur fichier à la fois**
`git add file1.html file2.js`

**Ajouter tous les fichiers**
`git add .`

Suite à cette étape les fichier son dans la stagging area.

**Pour commiter le / les fichiers**
`git commit -m "description du commit"`

**Pousser les commits sur un repo distant**
`git push -u origin master` / `git push`


**Ajouter et commiter en une commande**
`git -am "nouveau commit"`

**Afficher la liste des commits**
`git log`

**Voir la différence entre les fichier à commiter et ceux commité**
`git diff`

**the git diff --staged**
?? need more search about it
`git diff --staged`

**Reset de la stagging area**
`git reset monfichier.txt`

**revert d'un commit**
`git checkout -- monfichier.txt`


#### Branch
Les branches sont un bon moyen d'organiser son travail et de laisser une branche master propre.    
Elles permettent aussi un travail en équipe plus sain.
**Créer une branche**
`git branch nomDeLaBranche`

**Voir les branches**
La branche avec * est la branche de travail actuelle.
`git branch` / `git branch -a` (-a = all)

**Changer de branches**
`git checkout nomDeLaBrancheOuAller`

**Supprimer une branche**
`git branch -d nomDeLaBranche`

**Changer le dernier message de commit**
`git commit --amend`


#### Merge / rebase
Pour mixer notre travail sur une branche avec la branche master on peut soit effectuer un merge soit un rebase.     
On part du principe que notre travail est avancé sur la branche **dev**      

Merge: Notre travail est placé sur la branche master (/!\ conflits /!\ )          
`git merge master`

Rebase: on recupere la branche master et on mixe notre travail puis on peut faire un merge sur le master pour avoir un travail propre.
`git rebase master`     
`git checkout master`    
`git merge dev`    
`git push`

[citation de gitbook](https://git-scm.com/book/fr/v1/Les-branches-avec-Git-Rebaser)
````
Les dangers de rebaser
Ah... mais les joies de rebaser ne viennent pas sans leurs contreparties, qui peuvent être résumées en une ligne :
Ne rebasez jamais des commits qui ont déjà été poussés sur un dépôt public.
Si vous suivez ce conseil, tout ira bien. Sinon, de nombreuses personnes vont vous haïr et vous serez méprisé par vos amis et votre famille.
````

### Remote repository

Cette commande un nom de remote et une adresse de repo (1 fois seulement)
`git remote add origin https://github.com/try-git/try_git.git`

**Ajouter un autre remote (que l'on appelera pizza)**
`git remote add pizza https://gitlab.com/try-git/try_git.git`

**Then push it to the Origin (github)**
-u dit a git de se rappeler des parametres, la fois d'après on pourra faire simplement `git push`     
`git push -u origin master`
`git push -u pizza master`

**Récuperer la nouvelle version sur le repo distant**
`git pull origin master`
`git pull pizza master`

