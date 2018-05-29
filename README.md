Bee-Queue in Docker
=========

Getting started
---------------

Download [Docker for Mac or Windows](https://www.docker.com).

Clone this repo and run this command to start the application:

    $ docker-compose up

You can scale up the worker app to process more jobs. See what happens if you add 5, then 10, 30, 50

    $ docker-compose scale worker=5

You can scale up the producer app to create more jobs

    $ docker-compose scale producer=3

You can stop and remove all containers

    $ docker-compose down

That's all!
Cheer's