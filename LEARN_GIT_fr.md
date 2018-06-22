# LEARN GIT


## Liens

[Git site](https://git-scm.com/)

[resoudre un conflit de merge](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/])

## Git bash

1. Obtenir le chemin
2. Changer de répertoire
3. lister les fichiers et dossiers
4. lister + info
5. lister avec autorisations
6. Faire un dossier ( make directory )
7. Creer un fichier

```
pwd
cd
ls
ls -al
ls -l
md
touch test.txt
dir > test2.txt
chmod u+x
shown
add user toto
nano file.txt
vi file.txt
```

**u** : user **g** : group **o** : other | **r** : read **w** : write **x** : execute
```
chmod u+r u+w u+x
```
## Git commandes

### Mettre son mail utilisateur et son nom
```bash
*** 

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

```

### Sur l'ordi( local )


**Récuperer un projet sur un repo distant. (ex github)**
`git clone https://github.com/adresse/du/repo`

Si  il s'agit d'un nouveau projet , on l'initialise:
**Initialise git**
`git init`

**Voir l'état courant ( Utiliser fréquement )**
`git status`

**Ajouter un fichier dans la staging area**
`git add filename.ext`

**Ajouter tous les fichiers avec une extension paticulière**
`git add '*.txt'`

**commit avec un message**
`git commit -m "description of the commit"`


**Ajouter à la Stagging & committer en une fois**
`git -am "my new commit"`

**Obtenir le journal des commits**
`git log`

**Voir la différence entre de code avec la précédente version commité**
`git diff`


**Enlever un fichier de la stagging area**
`git reset nomDuFichier.txt`


**Revenir au commit précédent**
`git reset HEAD HARD`     


#### Branch
**Creer une branche**
`git branch name_of_branch`

**Voir toutes les branches**
the branch with * is the current branch
`git branch`

**Changer de branche**
`git checkout name_of_the_branch`

**Supprimer une branche**
`git branch -d name_of_the_branch`

**Changer le dernier message commité**
`git commit --amend`


#### Merging





### Remote repository

This command takes a remote name and a repository URL ( 1 time only )

`git remote add origin https://github.com/try-git/try_git.git`

**Ajouter une autre remote (pizza)**
`git remote add pizza https://gitlab.com/try-git/try_git.git`

**push le remote**
`git push -u origin master`
`git push -u pizza master`

**Mettre à jour ses repo depuis un repo distant**
`git pull origin master`
`git pull pizza master`