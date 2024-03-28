FROM bitnami/laravel:11.0.4 
RUN sudo apt-get update
RUN sudo apt-get -y install vim
RUN sudo sed -i 's/;extension=pdo_pgsql/extension=pdo_pgsql/' /opt/bitnami/php/lib/php.ini
# RUN sudo apt-get -y install php-imagick
# RUN sudo sed -i 's/;extension=imagick/extension=imagick/g; $a extension=imagick' /opt/bitnami/php/lib/php.ini