# LEARN DOCKER

## Docker
[install docker](https://docs.docker.com/install/)

```
docker run -it ubuntu bash
```

Run a debian 
```
docker run -ti debian
```

-ti : mean **t**erminal ....**i**interactive

For exit the container simply 
```
exit
```

Make the datas persitent:

1. launch your container
2. make some modifications
3. open a new terminal
4. `docker ps` show the container running with a specific id example 16cd710a9003
5. `docker diff 16c` to see the change made.
6. `docker commit 16c nameYourImage` like git
7. `docker image` show all your images and you should see the nameYourImage
8. `docker run -ti nameYourImage` and it should work
9. `docker save nameYourImage > /var/www/Lab/nameYourImage.tar`


Remove docker containers
1. `docker ps -a` list all the dockers containers up and 
2. 


```
docker ps
docker ps -a
docker images
docker built -t name/app:1 .
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

Delete all Docker images
```

```

## Dockerfile

Keywords
FROM
RUN
EXPOSE
CMD


```Dockerfile
FROM debian
RUN apt-get update
RUN apt-get upgrade
RUN apt-get install -y apache2
RUN service apache 2 start
EXPOSE 80
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