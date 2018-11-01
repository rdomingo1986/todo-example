# AngularTodo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Docker

Create a development or test image using the Dockerfile by using the configuration argument and run `docker build --build-arg configuration=development -t docker-angular-todo:0.0.1-dev .`

To create a production image using the Dockerfile, skip the configuration argument as by default it is set as production in the Dockerfile. Run `docker build -t docker-angular-todo:0.0.1-prod .`

Once an image is created, a container can be spawned by running `docker run -p 80:80 --name docker-angular-todo-container docker-angular-todo:0.0.1-dev(prod)`. The `-p` option defines a port mapping which says that port 80 of our container should be mapped to port 80 of the host machine. The `-name` option defines the name of the container. The last part of the command specifies the image to be used to create the container. `-d` option can be used to detach and let the Docker container run in background.

#### Using Docker Compose

Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration. Run `docker-compose build --build-arg configuration=development && docker-compose up` for creating a development build and run shorthand `docker-compose up --build` for a production build.

References:
- https://docs.docker.com/get-started/
- https://malcoded.com/posts/angular-docker
