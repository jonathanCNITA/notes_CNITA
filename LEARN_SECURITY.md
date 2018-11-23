# TEST FONNCTIONEL PUPETTEER
 [Doc tools for puppetteer](https://developers.google.com/web/tools/)

# Vulnerability testing Security scanner

## Links
+ [RapidScan – The Best Multi-Tool Web Vulnerability Scanner 2018](Vulnerability testing Security scanner)
+ [NESSUS SECURITY SCANNER SOFTWARE](https://www.tenable.com/products/nessus/nessus-professional)

## Security scanner
[NESSUS SECURITY SCANNER SOFTWARE](https://www.tenable.com/products/nessus/nessus-professional)      
les logiciels de security scanner permettent de de scanner les port puis les logiciels insallés.
Embarquant une base de vulnérabilité le logiciel permet de produire un compte-rendu des vulnérabilitées sur le site.
Deux modes sont disponiblent  un qui 'soft' et un autre qui peut jusqu'a altérer ou détruire les datas.
L'utilisation de ce typoe de logiciels est par défaut ILLEGAL, mais peut peut être effectuer sur ces propres services afin 
de tester les failles. Ou bien par accord écrit d'un client pour un audit par exemple.

## Test de charge
+ [Apache bench]()
+ [Tuto video](https://www.youtube.com/watch?v=W7jYCFvTmeQ)
Si WAMP est installé on le trouve dans le dossier : C:\wamp64\bin\apache\apache2.4.27\bin
Cela fonctionne avec le `cmd` de windows pas avec git bash /!\
### Test 1 
````
ab -n 100 -c 10 http://your.siteToTest.com/
````
