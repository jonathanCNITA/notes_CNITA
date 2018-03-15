# JAVA


## Links -
+ [Install -path - check Java](https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html)

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
mkdir forderProject/src/main/java/nameOfmyPackage
```

Add the pom.xml (maven Minimal example):
```
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
```
mvn compile
mvn install
java -cp target/NameOfYourProject-1.jar nameOfMyPackage.MainFile
```

## For the project HelloAgain

```
java -cp target/helloAgain-1.jar hello.Start
```