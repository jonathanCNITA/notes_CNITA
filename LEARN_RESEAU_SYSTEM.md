# Réseau-Système 

## Mini-Projet : Jeu de piste 


## Connect SSH
`ssh name@xx.xx.xxx.xxx`


## VIM
`vim helloWorld.txt`
appuyer sur inser
pour sortir <kbd>echap</kbd> puis 'ZZ'
[liste des command Vi](http://www.linux-france.org/prj/support/outils/vi.html)


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

## Install Lamp

[How To Install LAMP Stack On Debian 8](https://www.unixmen.com/how-to-install-lamp-stack-on-debian-8/)
Connect with SSH on your distant machine
```

```
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

nano /var/www/html/testphp.php

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

** Pour transvaser les fichiers sur le server **
[WINSCP](https://winscp.net/)