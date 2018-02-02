# LEARN DOCKER

## Install Docker
[install docker](https://docs.docker.com/install/)

## start

The Docker Hello world
```bash
docker run hello-world
```

Run an ubuntu with bash
```bash
docker run -it ubuntu bash
```

Run a debian 
```bash
docker run -ti debian
```

-ti : mean **t**erminal ....**i**interactive

For exit the container simply 
```bash
exit
```

## Make the datas persitent:

### Solution 1 (live mode)
1. launch your container
2. make some modifications
3. open a new terminal
4. `docker ps` show the container running with a specific id example 16cd710a9003
5. `docker diff 16c` to see the change made.
6. `docker commit 16c nameYourImage` like git
7. `docker image` show all your images and you should see the nameYourImage
8. `docker run -ti nameYourImage` and it should work
9. `docker save nameYourImage > /var/www/Lab/nameYourImage.tar`

### Solution 2 : make a Dockerfile

**Keywords**


    FROM
    LABEL
    RUN
    ADD
    COPY
    ENV
    EXPOSE
    STOPSIGNAL
    USER
    VOLUME
    WORKDIR



#### Dockerfile example
**1** Create a directory with a Dockerfile
```
mkdir testdockerfile
cd testdockerfile
touch Dockerfile
vim Dockerfile
```

**2** in the Dockerfile write this:
```Dockerfile
FROM debian
RUN apt-get update
RUN apt-get -y upgrade
RUN apt-get install -y apache2
EXPOSE 80
CMD apachectl -D FOREGROUND
```
And save & quit : <kbd>echap</kbd>  `:wq`


**3** Then you need to build you image :
```bash
docker build -t name/app:1 .
```

You can verify with `docker images`
**4** Run your acontainer with your image :
```bash
docker run --rm -it name/app:1
```

If you need a port for web applications:
```bash
docker run --rm -i -p 80:80 name/app:1
```

## Clean your containers & images

Delete a specific container
```bash
docker ps -a
# select the id of a specific container
docker stop <containerId>
docker rm <containerId>
```

Delete a specific image
```
docker images
# select the id || name of the image
docker rmi <imageName>
# if something like 'Conflict..' force the remove
docker rmi -f <imageName>
```


## Various commands

```
docker ps # list container are running
docker ps -a # list all container available (exited & running)
docker images # list all images you have
docker build -t name/app:1 .
docker run --rm -it name/app:1
```

Stop and remove docker container
```bash
docker stop <containerid>
docker remove <containerid>
```

Delete a specific Docker image
```bash
docker rmi <containerid>
# if Conflict
docker rmi -f <containerid> 
```
Create if don't exit / else overwrite finally write
```
RUN echo 'toto' > test.txt
```

Create if don't exit / else add the line
```
RUN echo 'toto' >> test.txt
```

## Links

[all commands](https://www.hisyl.fr/introduction-a-docker/)    

[Could not reliably determine the server's fully qualified domain name](https://itx-technologies.com/fr/blog/56-apache-genere-could-not-reliably-determine-the-servers-fully-qualified-domain-name)     

[docker start](https://www.youtube.com/watch?v=YFl2mCHdv24)     
[docker compose](https://www.youtube.com/watch?v=Qw9zlE3t8Ko)     