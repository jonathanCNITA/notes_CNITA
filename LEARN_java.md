# JAVA


## Links -
+ [Tuto -path - check Java](https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html)
+ [Install Java (v8)](https://www.java.com/fr/download/)
+ [Install Maven](http://maven.apache.org)

## Installation
check if Java is installed and which version is running else install Java
Get the java (Runtime environment)
```bash
java -version
-> java version "1.8.0_051" bla bla
```
Get the version of the Java compiler
```bash
javac -version
->javac 1.8.0_144
```
Get the path of your java installation
```bash
echo %JAVA_HOME%
->C:\Program Files\Java\jdk1.8.0_144
```

```bash
java
-> some info 
```

**ENVIRONMENT VARIABLE !!!!!**

![java environment variable](JavaPath.jpg)
![java environment variable](JavaPath2.jpg)

### Install maven

Project configuration:

```bash
mkdir -p folderProject/src/main/java/nameOfmyPackage
```

Add the pom.xml (maven Minimal example):
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project>
    <modelVersion> 4.0.0</modelVersion> 
    <groupId>com.name.company</groupId>
    <artifactId>NameOfYourProject</artifactId>
    <version>1</version>
    <properties>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
</project>
```  


### first program:
In the nameOfmyPackage create a file `MainFile.java` who should be your entry point:
```java
package nameOfmyPackage;

public class Mainfile {
	public static void main(String[] args) {
		System.out.println("this is the main program here!");
	}
}
```

### Compile && install

Open bash at the root of your project
```bash
mvn compile
mvn install
java -cp target/NameOfYourProject-1.jar nameOfMyPackage.MainFile
```

### For the project HelloAgain

```bash
java -cp target/helloAgain-1.jar hello.Start
```

## Class & heritance

An abstract class Personnage (Personnage.java)

```java
package game;

public abstract class Personnage {
    protected String name = "none";
    protected String img = "url";
    protected int life = 100;
    protected int attack = 10;

    
    public void setName(String userName) {
        this.name = userName;
    }

    public void setImg(String imageLink) {
        this.img = imageLink;
    }

    public String getName() {
        return this.name;
    }

    public int getLife() {
        return this.life;
    }

    public void decreaseLife(int attackPower) {
        this.life -= attackPower;
        if (this.life < 0) {
            this.life =  0;
        } 
    }

    public void increaseLife(int energy) {
        this.life += energy; 
        if (this.life > 100) {
            this.life = 100;
        }
    }
}
```

A Warrior class extends Personnage with a construtor.(Warrior.java)
```java
package game;

public class Warrior extends Personnage {
  
    Warrior(String newName) {
        this.setName(newName);
    }
}
```

## Interface

An interface is a way to pass a contrat !
[A tutorial about interface](https://www.tutorialspoint.com/java/java_interfaces.htmb)
you can implement an interface in your class to force this one to have some attributs
or methods.
With various class who implements the same interface the same method could have a different action.

Game.java
```java
package game;

public class Game
{
    public static void main(String[] args) 
    {
        private static SpeakFr perso1 = new SpeakFr();
        private static SpeakFr perso2 = new SpeakGb();

        perso1.sayHi();
        perso2.sayHi();
    }   
}
```

SayHello.java
```java
package game;

public interface SayHello 
{
    void sayHi();
}
```

SpeakFr.java
```java
package game;

public class SpeakFr implements SayHello
{
    public void sayHi()
    {
        System.out.println("Bonjour");
    }
}
```

SpeakGb.java
```java
package game;

public class SpeakGb implements SayHello
{
    public void sayHi()
    {
        System.out.println("Hello");
    }
}
```

## JBDC

### STEP 1 
[DownLoad JDBC mySql](https://dev.mysql.com/downloads/connector/j/5.1.html)

- UnCompress
- copy the mysql-connector-java-5.1.46-bin.jar
- Paste in C:\Program Files\Java\jre1.8.0_151\lib\ext


### STEP 2 (IntelliJ)
File > project structure
Project setting Modules

Clic on Dependencies
Clic on the green Plus sign > Jar or directories
Select the mysql-connector-java-5.1.46-bin.jar in the arborecence


### Create the DB


### Make the first connection for test

```java
 try 
 {    
    Class.forName("com.mysql.jdbc.Driver");
    System.out.println("Driver O.K.");

    String url = "jdbc:mysql://localhost:3306/databaseNAme";
    String user = "user";
    String passwd = "pwd";

    Connection conn = DriverManager.getConnection(url, user, passwd);
    System.out.println("Connexion effective !");

} 
catch (Exception e) 
{
    e.printStackTrace();
}

```

### Show the content of a table

We admit we have a table called `personnage`

```java
try 
{
    Class.forName("com.mysql.jdbc.Driver");
    System.out.println("Driver O.K.");

    String url = "jdbc:mysql://localhost:3306/databaseNAme";
    String user = "user";
    String passwd = "pwd";

    Connection conn = DriverManager.getConnection(url, user, passwd);
    System.out.println("Connexion effective !");

    Statement state = conn.createStatement();
    ResultSet result = state.executeQuery("SELECT * FROM personnage");
    ResultSetMetaData resultMeta = result.getMetaData();

    System.out.println("\n**********************************");
            
    for(int i = 1; i <= resultMeta.getColumnCount(); i++)
        System.out.print("\t" + resultMeta.getColumnName(i).toUpperCase() + "\t *");

    System.out.println("\n**********************************");

    while(result.next())
    {
        for(int i = 1; i <= resultMeta.getColumnCount(); i++)
            System.out.print("\t" + result.getObject(i).toString() + "\t |");

        System.out.println("\n---------------------------------");
    }
    result.close();
    state.close();

} 
catch (Exception e) 
{
    e.printStackTrace();
}
```
