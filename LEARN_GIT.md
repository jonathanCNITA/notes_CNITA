# LEARN GIT


Auteur: Jojo

## Good links

[Git main site](https://git-scm.com/)

[resolving-a-merge-conflict](https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/])

## Git bash

1. Get path
2. Change directory
3. list files and folders
4. list with more info
5. list with autorisations
6. make a folder ( make directory )
7. make a file
8. make a file

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
## Git command

### On your machine ( local )

First go to the good directory with git bash or whatever you want

**Get a git repo from gitHub ( or whatever )**
`git clone https://github.com/adresse/du/repo`

**Initialize git**
`git init`

**See what the current state of our project ( Use it frequently )**
`git status`

**Add a file to git (staging area)**
`git add filename.ext`

**Add all file with extension**
`git add '*.txt'`

**then commit**
`git commit -m "description of the commit"`


**Add & commit in the same time**
`git -am "my new commit"`

**Get the journal of the commits**
`git log`

**Show difference between the Original version and the staged area**
`git diff`

**the git diff --staged**
?? need more search about it
`git diff --staged`

**Reset from the stagged area**
`git reset octofamily/octodog.txt`

**Undo**
`git checkout -- octocat.txt`

**remove files from git staging area**
`git reset HEAD -- .`     

Or for specifi files:
`git reset HEAD -- path/to/file`


#### Branch
**Create a branch**
`git branch name_of_branch`

**See all branches**
the branch with * is the current branch
`git branch`

**switch between branches**
`git checkout name_of_the_branch`

**delete a branch**
`git branch -d name_of_the_branch`


**Change the last commit message**
`git commit --amend`


#### Merging





### Remote repository

This command takes a remote name and a repository URL ( 1 time only )

`git remote add origin https://github.com/try-git/try_git.git`

**Add an other remote (called pizza)**
`git remote add pizza https://gitlab.com/try-git/try_git.git`

**Then push it to the Origin (github)**
-u tells Git to remember the parameters, so that next time we can simply run git push 
`git push -u origin master`
`git push -u pizza master`

**Get an updated version of the files**
`git pull origin master`
`git pull pizza master`

**Get all the differences between our last commit**
Our most recent commit is HEAD
`git diff HEAD`

