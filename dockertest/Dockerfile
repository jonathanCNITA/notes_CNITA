FROM debian
RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y apache2
COPY website /var/www/html
COPY runserver.sh /var
EXPOSE 80
CMD ["service", "apache2", "start"]
