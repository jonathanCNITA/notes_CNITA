# NETWORK - SYSTEM 
 
## Useful software list

+ [git bash](https://git-scm.com/downloads) : installed with git
+ [putty](http://www.putty.org/) : PuTTY is an SSH and telnet client for the Windows. 
+ [WINSCP](https://winscp.net/) : Displace files on the server in graphic mode (very useful with edit file integrated)
+ [filezilla](https://filezilla-project.org/) : Supports FTP, FTP over SSL/TLS (FTPS) and SSH File Transfer Protocol (SFTP)


## Connection protocol SSH

**Secure Shell (SSH)** is both a computer program and a secure communication protocol.        
The connection protocol requires an exchange of encryption keys at the beginning of connection.    
 
1. Open terminal or git bash or putty
2. Connect to the distant machine
3. enter the password     

```bash
ssh name@xx.xx.xxx.xxx
```
   

**You are now connected to the distant machine !**    


## Main command lines

**cd**     
`cd` mean 'change directory' you can naviguate in the folders with it.     
```bash
cd /home/documents/music
``` 
To go back use `../`

**ls**
`ls` mean 'list segments' you can see/list all files and folders in the current directory.
```bash
# classic list
ls
# show hidden files
ls -a
```

**cat**
`cat` mean 'catenate' you can show the content of a file with this command    
```bash
cat recipe.txt
cat index.html
cat README.md
``` 

**grep**
`grep` mean 'General Regular Expression Processor' it search a mactching expression. 
It often use with a find or cat. use it has a filter.
```bash
# search in the README file all lines with author
cat README.md | grep author
# the same with insensitive casse
cat README.md | grep -i author
# Search the mp3 with the who contains eels
find . -name "*.mp3" | grep -i eels
```

**mv**     
`mv` mean 'move', use to move a file, a folder or rename.     
```bash
# move the file mysong.mp3 from document to music/mymegatubes
mv document/mysong.mp3 music/mymegatubes/

# move the folder 'project' with all files inside from 'atWork' to 'finished'
# -r for recurcively
mv -r atWork/project finished/

# rename a file
mv hekko.txt hello.txt
```

**cp**
`cp` mean copy, so it copy the file or folder and paste     
```bash
cp document/myFilm.aep document/filmInProduction/
```

**pwd**
`pwd` mean 'print working directory' so it print where you are.      
```bash
pwd
# will print $home/myname/DOCUMENT/mywebsite/css
```

**touch**
`touch` mean ???, it's used for create file.    
But it's general purpose is Update the access and modification times of each FILE to the current time.
```bash
# create new files
touch toDoList.txt
touch index.html
touch READEME.md
```

**apt**      
`apt` mean 'Advanced Packaging Tool' it's a package manager used by Debian and its derivatives

**apt-cache**     
Search a package
```bash
apt-cache search appache2
```

Filter your search with pipe
```bash
apt-cache search appache2 | grep PHP
```

**apt-get**      
Update your package != upgrade it only get the last version
```bash
àpt-get update
```

Upgrade your packages (do it after update). Do it often, on your server once a week
```bash
apt-get upgrade
```


## VIM / NANO
vim or vi / nano are text editor in terminal mode.  
You can open, edit, save etc...    
```bash
# open helloWorld.txt in vim
vim helloWorld.txt

# open helloWorld.txt in nano
nano helloWorld.txt 
```

**VIM**
+ When vim is open with your file press <kbd>inser</kbd> to edit.
+ Press <kbd>echap</kbd> then 'ZZ' for quit&save
[liste des command Vi](http://www.linux-france.org/prj/support/outils/vi.html)

### TIPS : exit text editor or process

+ <kbd>echap</kbd>
+ <kbd>ctrl</kbd> + <kbd>x</kbd>
+ <kbd>ctrl</kbd> + <kbd>d</kbd>
+ <kbd>shift</kbd> + <kbd>z</kbd> + <kbd>z</kbd>


## Install LAMP

LAMP mean Linux Appache MySQL PHP  

### Start install LAMP

[How To Install LAMP Stack On Debian 8](https://www.unixmen.com/how-to-install-lamp-stack-on-debian-8/)
Connect with SSH on your distant machine
```bash
ssh root@12.567.45.567
```

You have to install it by hands but it's very fast
1. Install Apache2
2. Install MySQL
3. Install PHP
4. Install PHPmyAdmin (! NOT IN PRODUCTION !)


** Install APACHE2 **
```bash
apt-get install apache2
```

Test apach done
Open your web browser and navigate to http://localhost/ or http://server-ip-address/.

** Install MySQL **
```
apt-get install mysql-server mysql-client
```

test MySQL installation
```
systemctl status mysql
```

** Install PHP **
```
apt-get install php5 php5-mysql libapache2-mod-php5
```

To test PHP, create a sample “testphp.php” file in Apache document root folder.

```
nano /var/www/html/testphp.php
```

Add the following lines.
```
<?php
phpinfo();
?>
```

Restart apache2 service with:
```
systemctl restart apache2
```

### After LAMP

1. make an update / upgrade `apt-get update` then `apt-get upgrade`
2. add your DB with phpMyAdmin
3. add your files with winscp / filezilla / git in `var/www/html`
	1. git init
	2. git remote
	3. git pull
4. get the log

### The logs files
In the log file you can see everything (BB is watching you).  

```
cd var/log/appache2/
cat error.log

# print the last 10
cat tail error.log

# print the last 6
cat tail -n 6 error.log

# print realtime
cat tail -f error.log
```

**TIPS! : click 3 times to select a line**

_________________________________________________________________________


## BASH COMMAND
cat all file in the current directory:
`grep "" *.txt`

cat all files recursively in a directory :
`find . -name '*.txt' -exec cat {} \`

`find . -name *.txt -exec cat {} \;`

`find . -name '*.player' -exec grep LEVEL cat {} \;`

`find . -name '*.player' -exec grep -e NAME -e VALUE -e LEVEL {} \;`

`find . -name '*.player' -exec grep VALUE  {} \; |cut -c7- | sort -n`

`'grep -r 834300 .'`

`for i in $(find . -type f); do echo ------; grep NAM $i; grep VAL $i; grep LEV $i; done`

Show hidden files:
`ls -a`

Copy a folder
`'cp -r My_Players/ Local_Competition/'`

Rename Folder
`mv myFolder myNewFolder`

afficher tous les fichier avec leur contenu
`find . -type f -exec cat {} \;`

afficher tous les fichier avec leur contenu
`find . -name '*.sponsor' -exec cat {} \;`

afficher tous les fichier avec leur contenu
`find . -print -type f -exec cat {} \;`



## My_Team
13300 9920 999 991 990 987 965 19030 25100 907 891

TEAM
Players/Brazil/Zenit-St-Petersburg/Hulk.player
Players/Germany/Bayern-Munich/Toni-Kroos.player
Players/Spain/Man-City/David-Silva.player
Players/France/Real-Madrid/Karim-Benzema.player
Players/Brazil/Shakhtar-Donetsk/Willian.player
Players/Spain/Barcelona/Sergio-Busquets.player
Players/France/Man-Utd/Patrice-Evra.player
Players/Slovakia/Napoli/Marek-Hamsik.player
Players/Colombia/Atletico-Madrid/Radamel-Falcao.player
Players/Italy/Juventus/Giorgio-Chiellini.player
Players/Netherlands/Internazionale/Wesley-Sneijder.player

