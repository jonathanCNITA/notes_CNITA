# LEARN C#


### Definition (wikipedia)
C# (C sharp [siː.ʃɑːp] en anglais) est un langage de programmation orienté objet, commercialisé par Microsoft depuis 20022 et destiné à développer sur la plateforme Microsoft .NET.
Il est dérivé du C++ et très proche du Java dont il reprend la syntaxe générale ainsi que les concepts, y ajoutant des notions telles que la surcharge des opérateurs, les indexeurs et les délégués. Il est utilisé notamment pour développer des applications web sur la plateforme ASP.NET.

## IDE
Nous utiliserons ici l'ide de Microsoft : [Visual studio 2017](https://visualstudio.microsoft.com/fr/vs/community/)

---

## Créer un nouveau projet de type console

![Getting started !](Capture_00.png)   
![A console project example](Capture_01.png)   

Par défaut on se retrouve avec le point de départ Main :
Affichon Hello world dans la console.
````csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello world");
        }
    }
}
```` 
Pour empecher la console de quitter à la fin du programme nous ajoutons un readLine qui attend une entrée utilisateur.

````csharp
// Ceci est un commentaire
Console.WriteLine("Hello world");
Console.Read();
````

---

## Structure d'un projet c#

Un projet est représenté par une "SOLUTION".     
Une solution peut contenir plusieurs projets, par example le projet principal (program.cs) puis un projet contenant les tests. 
On peut trouver aussi le projet principal et un projet de type dll (Dynamic Link Library).    

![Solution](Capture_02.png)   

Lorque l'on travaille avec des projets différent dans une même solution il faut les référencer en les ajoutant en référence.     

![Ajouter une référence](Capture_03.png)   


Pour les dll il faut ajouter la référence et importer dans le programme via le namespace:
````csharp
using MetroApi;
````




## Un programme un peut plus complexe:
Afficher le nom de l'utilisateur et une classe qui  retourne un message différent selon l'heure.

## Creer une DLL (Dynamic Link Library)
Définition  : Une Dynamic Link Library (en français, bibliothèque de liens dynamiques)1,2,3 est une bibliothèque logicielle dont les fonctions sont chargées en mémoire par un programme, au besoin, lors de son exécution, par opposition aux bibliothèques logicielles statiques ou partagées dont les fonctions sont chargées en mémoire avant le début de l'exécution du programme. ( [wikipedia](https://fr.wikipedia.org/wiki/Dynamic_Link_Library)

---
1. Ajouter un nouveau projet de type Bibliothèque de classe.         
![new project](Capture_06.png)
![Add methos & attribute to the class](Capture_07.png)
2. Creer la librairie         
![Add methos & attribute to the class](Capture_08.png)
3. Une fois la classe ecrite il faut la générer       
![Generate dll](Capture_10.png)
4. On retrouvera le fichier DLL généré.     
![Path to the dll file](Capture_11.png)
5. Puis dans un programme creer une nouvelle instante de la classe (ou pas si il s'agit de méthode statique)     
![Instance of the dll class](Capture_12.png)
6. On remarque que le Dll n'est pas lié à notre projet, pour cela il faut mettre une référence à notre DLL.     
![Add ref to the dll file](Capture_13.png)      
![Add ref to the dll file](Capture_14.png)     
![Add ref to the dll file](Capture_15.png)     
7. Il faut enfin ajouter le namespace avec `using DllnameSpace`     
![Add namespace](Capture_16.png)


## TIPS C#

**Rendre les éléments d'un tableau unique:**     
````csharp
using System.Linq;
// .....
int[] arrNum = { 1, 2, 3, 2, 4, 5, 6, 3, 7, 8, 9, 9 };
int[] arrNumDistinct = arrNum.Distinct().ToArray();
foreach(int n in arrNumDistinct)
{
    Console.WriteLine(n);
}
````
**Afficher les Key values d'un dictionnaire:**
````csharp
foreach (KeyValuePair<string, List<string>> station in stationsDict)
{
    Console.WriteLine(station.Key);
    foreach (string line in station.Value)
    {
        Console.WriteLine(line);
    }
}
````
**Convertir lune réponse JSON en model de classe**     
[http://json2csharp.com](http://json2csharp.com)

## Add info to dll 
1. Cliquer sur le projet et selectionner propriété (tout en bas du menu de selection)
2. Selectionner Build sur le menu lateral
3. cocher la case fichier de documentation XML
4. faire la doc sous ce format.


````csharp
namespace MetroApi
{
    /// <summary>
    /// My tool box with various methods to help the treatment of json Datas
    /// </summary>
    public class ToolBox
    {
        /// <summary>
        /// GetListNameWithoutDuplicateAsDictionnary
        /// </summary>
        /// <param name="stationList"> my parameter</param>
        /// <returns>a dictionary without "doublon" for station names and lines</returns>
        public static Dictionary<string, List<string>> GetListNameWithoutDuplicateAsDictionnary(List<StationModel> stationList)
        {
            Dictionary<string, List<string>> stationsDict = new Dictionary<string, List<string>>();
            foreach (StationModel station in stationList)
            {
                if (!stationsDict.ContainsKey(station.name))
                {
                    stationsDict.Add(station.name, station.lines);
                }
                else
                {
                    stationsDict[station.name] = (stationsDict[station.name].Concat(station.lines)).Distinct().ToList();
                }
            }
            return stationsDict;
        }
````
![Step 2](Capture_04.png)
![Step 3](Capture_045.png)    